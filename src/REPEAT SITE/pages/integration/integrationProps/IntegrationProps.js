import React from "react";
import './IntegrationProps.css';



function IntegrationProps(props) {
    return (
        <div className="IntegrationProps">
          
            <div className="each-integration">

                <img className="integration-img" src={props.img} />
                <h2 className="integration-title"> {props.title} </h2>
                <h4 className="integration-descriptipn"> {props.description} </h4>

            </div>
        </div>
    )
}

export default IntegrationProps;