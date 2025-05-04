import React from "react";
import './Title.css'
function Title({ onClick }) {
    return (
        <div onClick={onClick} className="title-container">
            <h1 id="Title">Wubba Lubba Dub Dub</h1>
            <p id="subTitle">Welcome to the Rick and Morty app!</p>
        </div>
    )
}

export default Title