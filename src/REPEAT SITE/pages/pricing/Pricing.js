import React from "react";
import PricingProps from "./pricingProps/PricingProps";
import { BsCheck } from "react-icons/bs";



function Pricing() {
    return (
        <div className="price-div">
            <h1 className="feauturing-moments-title">Pricing</h1>
            <div className="pricing-props">
                <PricingProps priceType='STARTER' price='$199  /month ' upperPrice='Up to 5,000' />
                <PricingProps priceType='GROWTH' price='$499  /month ' upperPrice='5,000-10,000' />
                <PricingProps priceType='PRO' price="Let's chat  " upperPrice='More Than 20,000' />
            </div> <br />
            <div className="plans-main-div">
                <div className="all-plans-include">
                    <h1 className="feauturing-moments-title" >ALL PLANS INCLUDE</h1>
                    <div className="plans-list">
                        <div className="float-left">
                            <h3> < BsCheck className="checked-icon" />  Repeat Moments™</h3>
                            <h3>  <BsCheck className="checked-icon" />  All integrations</h3>
                            <h3>  <BsCheck className="checked-icon" />  Trigger email & SMS flows with Repeat events</h3>
                            <h3>  <BsCheck className="checked-icon" />  Personalized carts</h3>
                            <h3>  <BsCheck className="checked-icon" />  Retention insights    </h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pricing;