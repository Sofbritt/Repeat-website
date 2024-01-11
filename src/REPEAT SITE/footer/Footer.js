import React from "react";
import './Footer.css';
import { BsBasket3, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-icons">
                <div>
                    <BsBasket3 className="white-basket" />
                </div>
                <div className="right-side-icons">
                    <BsInstagram className="right-icons" />
                    <BsTwitter className="right-icons" />
                    <BsLinkedin className="right-icons" />
                </div>
            </div>
            <div className="footer-links">

                <a className="footer-link" href="https://blog.getrepeat.io/?_gl=1*1okxr2n*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NTEwOTc2MC44LjAuMTY5NTEwOTc2MC42MC4wLjA." > <h2>Blog</h2></a>
                <a  className="footer-link"  href="https://open.spotify.com/show/09uTHnBt2GeNbhUtgajCRd?si=a827870e8ef64362&nd=1"> <h2>Podacst</h2></a>
                <a  className="footer-link"  href="https://repeat.substack.com/"> <h2>Newsletter</h2></a>
                <a  className="footer-link"  href="https://boards.greenhouse.io/repeatinc"><h2>Jobs</h2></a>
                <a  className="footer-link"  href="https://getrepeat.io/legal/privacy-policy"> <h2>Privacy Policy</h2></a>
                <a  className="footer-link"  href="https://getrepeat.io/legal/terms-of-service">  <h2>Terms of Service</h2></a>
            </div>

            <div className="footer-span">
                <span>© 2023 REPEAT INC. Moments is a trademark of Repeat, Inc.</span>
            </div>

        </div>
    )
}

export default Footer;