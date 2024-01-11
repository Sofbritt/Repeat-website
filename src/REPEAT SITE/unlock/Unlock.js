import React from "react";
import { BsFillForwardFill } from "react-icons/bs"


function Unlock() {
    return (
        <div className="header">
            <div className="supercharged-part">
                <h1 className="big-title">
                    UNLOCK YOUR CUSTOMER MOMENTS</h1>
                <span> Start activating the Moments that matter. Get started now to see how Repeat can simplify and supercharge your retention workflow.</span> <br />
                <button className="big-getstarted-btn"> <BsFillForwardFill />  GET STARTED</button> <br />
                <a className="bookDemo-link" href="https://getrepeat.io/?demo=true">Or,book a demo</a>
            </div>
        </div>
    )
}

export default Unlock;