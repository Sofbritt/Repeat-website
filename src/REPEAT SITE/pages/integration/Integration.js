import React from "react";
import './Integration.css';
import IntegrationProps from "./integrationProps/IntegrationProps";


function Integration() {
    return (
        <div className="integrations">
            <h1 className="integration-name">Integrations</h1>
            <h1 className="sec-integration-title">Simplify retention workflows with Repeat’s integrations
            </h1>
            <p className="integration-p">Integrating Repeat with your existing marketing channels turns them into supercharged second order machines. By automating personalized messaging at high-leverage lifecycle Moments, you can streamline your retention workflows and encourage more customers to make repeat orders.

                Connect Repeat with your marketing channels to easily trigger automations, personalize campaigns, and segment customer lists.

            </p>

            <div className="IntegrationProps-divs">

                <IntegrationProps img='https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4b850741-4df3-4051-bc81-d922e923a486/klaviyo/w=1920,quality=80'
                    title='Klaviyo'
                    description='Use Repeat and Klaviyo' />
                <IntegrationProps img='https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/02a577c6-4297-40d1-b5a5-1c0de5eb2274/attentive/w=1920,quality=80'
                    title='Attentive'
                    description='Use Repeat and Klaviyo' />
                <IntegrationProps img='https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/43c06565-3907-4842-a6eb-0a9216dc49d9/postscript/w=1920,quality=80'
                    title='Postscript'
                    description='Use Repeat and Klaviyo' />


            </div>
            <div className="sec-IntegrationProps-div">
                <IntegrationProps img='https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fb7236d4-2ab4-40f1-b74d-37fefd631081/postpilot/w=1920,quality=80'
                    title='PostPilot'
                    description='Use Repeat and Klaviyo' />
            </div>
        </div>
    )
}


export default Integration;