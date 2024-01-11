import React from "react";
import './PricingProps.css';
import { BsCheck } from "react-icons/bs";


function PricingProps(props) {
  return (
  <div className="a" >
      <div className="price-list">
      <h1 className="price-type" > {props.priceType} </h1>
      <div className="bg-white">
        <h2 className="price"> {props.price}</h2>
        <h3 className="upper-price"> <BsCheck className="checked-icon" /> {props.upperPrice} </h3>
        <h3 className="per-month">order per month </h3>
      </div>
    </div>
  </div>
  )
}


export default PricingProps;