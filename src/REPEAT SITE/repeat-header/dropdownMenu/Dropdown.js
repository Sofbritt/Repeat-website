import React from "react";
import './DropdownMenu.css';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <div className="dropdownMenu">
                <a href="/moments"><h3 className="menuText">Moments</h3></a>
                <a href="/plays" > <h3 className="menuText">Plays</h3></a>
                <a href="/integrations" > <h3 className="menuText">Integrations</h3></a>
                <a href="/pricing" >  <h3 className="menuText">Pricing</h3></a>

            </div>
        </div>
    )
}

export default Dropdown;