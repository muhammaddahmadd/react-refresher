import React, { useState } from "react";

function Steps() {
    const [inc, setInc] = useState(false);
    const [dec, setDec] = useState(false);




    return (
        <div className="main-circle">
            <p className="circle active">1</p>
            <p className="circle">2</p>
            <p className="circle">3</p>
        </div>
    )
}

export default Steps;
