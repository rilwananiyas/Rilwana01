import Course from './Course';
import { useState, useEffect } from 'react';

function CourseList() {

    const [courses, setCourses] = useState(null);

    useEffect(() => {

        fetch('http://localhost:3001/courses')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => setCourses(data));

    }, []);

    function handledelete(id) {

        const newCourses = courses.filter(
            (course) => course.id !== id
        );

        setCourses(newCourses);
    }

    const topCourses = courses
        ? courses.filter(course => course.rating >= 3)
        : [];

    if (!courses) {
        return <h1>Loading...</h1>;
    }

    const coursesList = topCourses.map(
        (course) => (
            <Course
                key={course.id}
                name={course.name}
                instructor={course.instructor}
                image={course.image}
                rating={course.rating}
                discount={course.discount}
                delete={() => handledelete(course.id)}
            />
        )
    );

    return (
        <>
            {coursesList}
        </>
    );
}

export default CourseList;