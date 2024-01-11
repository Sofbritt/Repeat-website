import React from "react";
import './Moments.css';

function Moments() {
    return (
        <div className="moments">
            <h1 className="feauturing-moments-title">Moments</h1>
            <p className="moments-p">Repeat automatically monitors when customers enter key lifecycle moments—think first to second purchase, replenishment, winback—and passes the most impactful data to the email and SMS platforms you use today (like Klaviyo, Postscript and Attentive).

                The result?

                More personalized campaigns, simplified flows, and an all-around simpler retention workflow.

                Moments make it a breeze to create the kind of hyper-personalized messaging that used to require complicated if/else logic, rigid timing, and burdensome setup.
            </p>

            <div className="featuring-in-moments"> <div className="featuring-moments">

                <a className="featuring-link" href="https://getrepeat.io/moments/replenishment">
                    <div className="each-featuring-moment">
                        <h3 className="featuring-title">Replenishement</h3>
                        <h5 className="featuring-moment-span">
                            Customers in the Replenishement moment are ready to buy more of a product they've bought before.
                        </h5>
                    </div>
                </a>
                <a className="featuring-link" href="https://getrepeat.io/moments/lapse-prevention">
                    <div className="each-featuring-moment">
                        <h3 className="featuring-title">Replenishement</h3>
                        <h5 className="featuring-moment-span">
                            Customers in the Replenishement moment are ready to buy more of a product they've bought before.
                        </h5>
                    </div>
                </a>
                <a className="featuring-link" href="https://getrepeat.io/moments/second-order">
                    <div className="each-featuring-moment">
                        <h3 className="featuring-title">Replenishement</h3>
                        <h5 className="featuring-moment-span">
                            Customers in the Replenishement moment are ready to buy more of a product they've bought before.
                        </h5>
                    </div>
                </a>
            </div></div>
        </div>
    )
}

export default Moments;