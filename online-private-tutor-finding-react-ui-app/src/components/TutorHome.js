import React from 'react'

function TutorHome() {

    const tutorObject = localStorage.getItem('tutorObj');

    console.log("tutorbject ",tutorObject);

    return (
        <div>
            <h2>Welcome, {JSON.parse(tutorObject).tutorName} </h2>
        </div>
    )
}

export default TutorHome
