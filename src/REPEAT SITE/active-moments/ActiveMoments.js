import React from "react";
import './ActiveMoments.css';
import {  BsFillForwardFill } from "react-icons/bs";

function ActiveMoments() {
    return (
        <div>
            <div className="active-moments-div">
                <div className="drive-order-title">
                    <h1>ACTIVATE MOMENTS WITH PLAYS </h1>

                </div>
                <div className="driveOorder-span">
                    <span className="order-span">The key to simplifying your work without sacrificing performance: ready-made Plays, like Moment-specific flows, dynamic email banners, and personalized direct mail, make it easy to leverage the Moments that Repeat surfaces. They’ll help you quickly create campaigns and flows that resonate with your customers, no matter what stage of the lifecycle they’re in.
                    </span>
                    <img className="driveOorder-img" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/602e95fc-793e-49e0-a802-8ce0b84c1d48/activate_moments_with_plays/w=750,quality=80" />
                </div>
            </div>

            <h1 className="featuring-moments-title">FEATURED MOMENTS</h1>
            <div className="featuring-moments">

                <a className="featuring-link" href="https://getrepeat.io/moments/replenishment">
                    <div className="each-active-moment">
                        <h3 className="active-title">Bring Back Lapsing Customets With Postcards</h3>
                        <button className="first-btn">About to Lapse</button> <br />
                        <button className="email-btn"> Direct Email</button> <br />
                        <button className="third-btn">Flow</button>
                        <h5 className="featuring-moment-span">
                            Customers in the Replenishement moment are ready to buy more of a product they've bought before.
                        </h5>
                    </div>
                </a>
                <a className="featuring-link" href="">
                    <div className="each-active-moment">
                        <h3 className="active-title"> Dynemic  Reminder  Banner Replenishement</h3>
                        <button className="first-btn">Replenishement</button>  <br />
                        <button className="email-btn">Email</button> <br />
                        <button className="third-btn">Reusable Component</button>
                        <h5 className="featuring-moment-span">
                            Customers in the Replenishement moment are ready to buy more of a product they've bought before.
                        </h5>
                    </div>
                </a>
                <a className="featuring-link" href="">
                    <div className="each-active-moment">
                        <h3 className="active-title"> Supscription  Upsell Flow</h3>
                        <button className="first-btn">Replenishement</button> <br />
                        <button className="email-btn">Email</button> <button className="email-btn">SMS</button> <br />
                        <button className="third-btn">Flow</button>

                        <h5 className="featuring-moment-span">
                            Customers in the Replenishement moment are ready to buy more of a product they've bought before.
                        </h5>
                    </div>
                </a>
            </div>
            <a className="explore-link" href="https://app.super.so/site/18f07db5-d58c-4144-a891-0df945119dae/footer#plays">  Explore more place <BsFillForwardFill/> </a>
        </div>
    )
}

export default ActiveMoments;