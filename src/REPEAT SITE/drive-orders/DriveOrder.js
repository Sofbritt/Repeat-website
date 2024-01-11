import React from "react";
import './DriveOrder.css';


function DriveOrder() {
    return (
        <div className="gray-bg">
            <div className="drive-order-div">
                <div className="drive-order-title">
                    <h1>DRIVE MORE SECOND ORDERS WITH MOMENTS THAT MATTER </h1>

                </div>
                <div className="driveOorder-span">
                    <span className="order-span">Repeat monitors when customers enter key Moments—think new product discovery, replenishment, lapsing—and passes that intelligence to the email and SMS platforms you use today. The result is more personalized campaigns, smarter flows, and an easier retention workflow.

                        Moments make it a breeze to create the kind of hyper-personalized messaging that used to require complicated if/else logic, rigid timing, and burdensome setup.
                    </span>
                    <img className="driveOorder-img" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/36a6aadd-6a11-477b-add0-c08398170243/predicted_next_order/w=750,quality=80" />
                </div>
            </div>

            <h1 className="featuring-moments-title">FEATURED MOMENTS</h1>
            <div className="featuring-moments">

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
            </div>
        </div>
    )
}

export default DriveOrder;