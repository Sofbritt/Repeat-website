import React from "react";
import './FaveBrandsProps.css';


function FaveBrandsProps(props) {
    return (
        <div>
            <div className="each-fave-brands">
                <img className="each-fave-brand-img" src={props.img} />
                <h3 className="fave-brand-about">{props.about} </h3>
                <h5 className="fave-brand-description"> {props.description} </h5>
                <h4 className="fave-brand-title"> {props.title} </h4>
                <h5 className="read-more"> Read More </h5>
            </div>


        </div>
    )
}

export default FaveBrandsProps;