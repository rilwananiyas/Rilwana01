import { useState } from "react";


function Course(props) {

    props = {
        name: "Course Name",
        instructor: "Loading.....",
        image: thumb01,
        ...props
    };

    const [purchased, setPurchased] = useState(false);

    const styles = {
        backgroundColor: "#f1dfdf",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "5px",
        textAlign: "center",
        margin: "19px",
        width: "220px",
        height: "420px",
        display: "inline-block",
        verticalAlign: "top"
    };

    function applydiscount(discount, e) {

        alert(
            "You have enrolled in the course: "
            + props.name + " "
            + discount + " Added"
        );

        console.log(e);

        setPurchased(true);
    }

    return (

        props.name && (

            <div style={styles}>

                <img
                    src={props.image}
                    alt="Course Thumbnail"
                    style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover"
                    }}
                />

                <h2>{props.name}</h2>

                <p>{props.instructor}</p>

                <button
                    onClick={(event) =>
                        applydiscount(props.discount, event)
                    }
                >
                    Enroll Now
                </button>

                <p>
                    {purchased
                        ? "Already Purchased"
                        : "Got it now"}
                </p>

                <button onClick={props.delete}>
                    Delete Course
                </button>

                <p>
                    {"⭐".repeat(props.rating)}
                </p>

            </div>
        )
    );
}

export default Course;