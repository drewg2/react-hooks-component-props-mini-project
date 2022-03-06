import React from "react";

function About({blogData: {name,image="https://via.placeholder.com/215",about}}) {

    return(
        <aside>
            <img src={image} alt="Blog Logo" ></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;