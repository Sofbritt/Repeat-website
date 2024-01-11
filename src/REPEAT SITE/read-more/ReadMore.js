import React from "react";
import FaveBrandsProps from "../fave brands props/FaveBrandsProps";

function ReadMore() {
    return (
        <div className="fave-brands-div">
            <h1 className="faveBrands-title">
                READ MORE
            </h1>
            <div className="faveBrand-props">
                <a className="details-link" href="https://blog.getrepeat.io/dr-squatchs-9-cvr-reordering-experience-on-sms/?_gl=1*10ufl96*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NDgzNjY0Mi4zLjEuMTY5NDgzNjY1MC41Mi4wLjA.">
                    <FaveBrandsProps img='https://img.freepik.com/premium-vector/white-envelope-cartoon-vector-illustration-closed-envelope-mail-flat-icon-outline_385450-1417.jpg?w=740'
                        about='How To Quickly Build A Replenishement Flow'
                        description='"Personolized timing powering direct mail helped us our cusomers at the rigth moment to really amplify second purchases"'
                    />
                </a>
                <a className="details-link" href="https://blog.getrepeat.io/how-kopari-simplified-their-email-flows-with-repeat/?_gl=1*eiiayk*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NDgzNjY0Mi4zLjEuMTY5NDgzNjcwNC41OC4wLjA.">
                    <FaveBrandsProps img="https://blog.getrepeat.io/content/images/size/w1200/2022/09/Frame-48096606.jpeg"
                        about='How Do You Measure and Improve Your Retation   Strategy With Data'
                        description='"Truly,it is helped the repeat purchase rate because we know when someone might need to replenish"'
                    />
                </a>
                <a className="details-link" href="https://blog.getrepeat.io/black-girl-vitamins-improves-margins-by-activating-customers-at-key-retention-moments/?_gl=1*1g5jtrv*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NDgzNjY0Mi4zLjEuMTY5NDgzNjgxNS42MC4wLjA.">
                    <FaveBrandsProps img="https://blog.getrepeat.io/content/images/size/w1200/2022/09/Frame-48096606.jpeg"
                        about='Improved margins for returning customers'
                        description='"The product works it does what it is supposed to do with minimal effort from out team"'

                    />
                </a>
            </div>
        </div>
    )
}

export default ReadMore;