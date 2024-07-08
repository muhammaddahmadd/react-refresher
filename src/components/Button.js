import React, { useState } from "react";

function Button() {
    const [back, setBack] = useState(false)
    const [next, setNext] = useState(false);
    function previous() {
        setBack(!back)
        // alert("Back")
        console.log("back")
    }
    function nuxt() {
        setNext(!back)
        // alert("Back")
        console.log("next")
    }

    return (
        <div className="buttons-main-div">
            <button className="previous" onClick={() => previous()}>Previous</button>
            <button className="next" onClick={() => nuxt()}>Next</button>
        </div>
    )
}

export default Button;