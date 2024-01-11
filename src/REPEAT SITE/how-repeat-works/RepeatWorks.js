import React from "react";
import './RepeatWorks.css';


function RepeatWorks() {
    return (
        <div className="gray-bg">
            <div className="drive-order-title">
                <h1 >HOW REPEAT WORKS</h1>
            </div>
            <div className="drive-order-title">
                <h2>INGEST AND ANALYZE</h2>

            </div>
            <div className="driveOorder-span">
                <span className="order-span">
                    Repeat connects to your Shopify store to ingest all of your historical orders and each new order that your customers place. We analyze those orders at the store level to identify trends and at the customer level to understand individual behavior.

                </span>
                <img className="repeat-img" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6ca568be-9c8f-47b7-bdd2-c1cac61e03bd/ingest_and_anlyze/w=750,quality=80" />
            </div>
            <div className="drive-order-title">
                <h2>TRANSFORM AND REPORT</h2>
            </div>
            <div className="driveOorder-span">
                <span className="order-span">   Repeat feels like magic, but we're not a black box. We utilize your store's data to produce valuable insights and reports that help you level up your retention strategy with the same intelligence that fuels Repeat's tools.

                </span>
                <img className="repeat-img" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d72ba5ba-bcd6-46a5-a7f4-26850e0e5cf2/transform_and_report/w=750,quality=80" />
            </div>
            <div className="drive-order-title">
                <h2>AUTOMATE AND ACT</h2>
            </div>
            <div className="driveOorder-span">
                <span className="order-span">  Repeat generates events that you can use to automate flows and enriches customer profiles with data for personalization and segmentation. It all flows seamlessly into Klaviyo, Postscript, and Attentive to give you new ways to optimize your retention workflow.



                </span>
                <img className="repeat-img" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2790cf29-d061-46d3-a61d-905c274d2054/automate_and_act/w=750,quality=80" />
            </div>
        </div>
    )
}


export default RepeatWorks;