import React from "react";
import './Header.css';
import { BsBasket3, BsFillForwardFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import Dropdown from "./dropdownMenu/Dropdown";
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";


function Header() {



    const [isDropdownVisible, setDropdownVisible] = useState(false)

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }
    const handleMouseOver = () => {
        setDropdownVisible(false)
    }

    const [open, setOpen] = useState(false)

    const [openInputs, setOpenInputs] = useState(false)

    const [openLineMenu, setOpenLineMenu] = useState(false)

    const [inputFields, setInputFields] = useState({
        name: '',
        email: '',
        jobtitle: ''
    })
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.name === '') {
            errors.name = 'required'
        }
        if (inputValues.email.length < 12) {
            errors.email = "Email is too short";
        }
        if (inputValues.jobtitle === '') {
            errors.jobtitle = 'required'
        }


        return errors;
    };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };
    const finishSubmit = () => {
        console.log(inputFields);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);
    return (
        <div>
            <div className="header">

                {openLineMenu === true ?
                    <div className="drop-line-menu" >
                        <div className="drop-line-menu-list"><AiOutlineClose className="close-line-menu" onClick={() => setOpenLineMenu(false)} />

                            {open === true
                                ?
                                <h3 className="slim-line-menu" onClick={() => setOpen(false)} > Product <BsFillArrowDownCircleFill /> <Dropdown />  </h3>
                                :
                                <h3 className="slim-line-menu" onClick={() => setOpen(true)} > Product <BsFillArrowDownCircleFill /> </h3>
                            }

                            <a href="https://blog.getrepeat.io/?_gl=1*1fpp8g8*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NjkxMDk0NS4yNC4xLjE2OTY5MTIzMjcuNDkuMC4w" ><h4 className="slim-line-menu" >Blog</h4></a>
                            <a href="https://getrepeat.io/ltv" > <h4 className="slim-line-menu">Stop Focusing on LTV</h4></a>

                        </div>
                    </div> :
                    <div className="menu-withLines">
                        <h2 className="repeat"> <BsBasket3 /> Repeat</h2>

                        <AiOutlineAlignCenter className="line-menu" onClick={() => setOpenLineMenu(true)} />

                    </div>
                }



                <div className="header-menu">

                    <a href="/" ><h2 className="repeat"> <BsBasket3 /> Repeat</h2></a>
                    {open === true
                        ?
                        <h3 className="slim" onClick={() => setOpen(false)} > Product <BsFillArrowDownCircleFill /> <Dropdown />  </h3>
                        :
                        <h3 className="slim" onClick={() => setOpen(true)} > Product <BsFillArrowDownCircleFill /> </h3>
                    }
                    <a className="link" href="https://blog.getrepeat.io/?_gl=1*1fpp8g8*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NjkxMDk0NS4yNC4xLjE2OTY5MTIzMjcuNDkuMC4w" >    <h3 className="slim">Blog</h3></a>
                    <a className="link" href="https://getrepeat.io/ltv" ><h3 className="slim">Stop Focusing on LTV</h3></a>



                    <button className="header-btn" onClick={() => setOpenInputs(true)}>GET STARTED</button>
                    {openInputs === true
                        ?
                        <div className="get-started-big-div" >
                            {Object.keys(errors).length === 0 && submitting ? (
                                <span className="success">Successfully submitted ✓</span>
                            ) : null}

                            <div className="get-started-inputs-div">
                                <AiOutlineClose className="close-inputs" onClick={() => setOpenInputs(false)} />
                                <h1 className="getstarted-title">GET STARTED</h1>
                                <div className="each-getStarted-input">

                                    <h3 className="inputs-lable">   First Name <span className="nshan">*</span> </h3>
                                    <input type="text" className="get-started-input"
                                        name="name"
                                        value={inputFields.name}
                                        onChange={handleChange}
                                    />

                                    {
                                        errors.name ? (
                                            <p className="error">
                                                Required
                                            </p>
                                        ) : null
                                    }

                                    <h3 className="inputs-lable" >Work Email  <span className="nshan">*</span></h3>
                                    <input type="text" className="get-started-input"

                                        name="email"
                                        value={inputFields.email}
                                        onChange={handleChange}
                                    />

                                    {errors.email ? (
                                        <p className="error">
                                            Email should be at least 15 characters long
                                        </p>
                                    ) : null}

                                    <h3 className="inputs-lable">Job Title <span className="nshan">*</span></h3>
                                    <input type="text" className="get-started-input"
                                        name="jobtitle"
                                        value={inputFields.jobtitle}
                                        onChange={handleChange}
                                    />
                                    {errors.jobtitle ? (
                                        <p className="error">Required</p>
                                    ) : null}

                                    <h3 className="inputs-lable">Company Name  </h3>
                                    <input type="text" className="get-started-input" />
                                    <button className="install-btn" onClick={handleSubmit}>Install the app</button>



                                </div>
                            </div>
                        </div>
                        :
                        <div> </div>
                    }




                </div>






                <div className="supercharged-part">
                    <h1 className="big-title">SUPERCHARGED
                        LIFECYCLE MARKETING</h1>
                    <span> Repeat boosts repurchase rate by automatically delivering personalized messaging at high-leverage Moments™.</span> <br />
                    <button className="big-getstarted-btn"> <BsFillForwardFill /> GET STARTED</button> <br />
                    <a className="bookDemo-link" href="https://getrepeat.io/?demo=true">Or,book a demo</a>
                </div>
            </div>
        </div>
    )
}

export default Header;