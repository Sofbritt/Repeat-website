import React from "react";
import './FaveBrands.css';
import FaveBrandsProps from "../FaveBrandsProps";

function FaveBrands() {
    return (
        <div className="fave-brands-div">
            <h1 className="faveBrands-title">
                YOUR FAVORITE BRANDS ARE HAVING A MOMENT
            </h1>
            <div className="faveBrand-props">
                <a className="details-link" href="https://blog.getrepeat.io/dr-squatchs-9-cvr-reordering-experience-on-sms/?_gl=1*10ufl96*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NDgzNjY0Mi4zLjEuMTY5NDgzNjY1MC41Mi4wLjA.">
                    <FaveBrandsProps img='https://blog.getrepeat.io/content/images/size/w1000/2022/07/Screen-Shot-2022-05-20-at-1.26.23-PM.png'
                        about='Increased 90-day repeat others by 10%'
                        description='"Personolized timing powering direct mail helped us our cusomers at the rigth moment to really amplify second purchases"'
                        title='Dr. Squatch' />
                </a>
                <a className="details-link" href="https://blog.getrepeat.io/how-kopari-simplified-their-email-flows-with-repeat/?_gl=1*eiiayk*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NDgzNjY0Mi4zLjEuMTY5NDgzNjcwNC41OC4wLjA.">
                    <FaveBrandsProps img='https://koparibeauty.com/cdn/shop/articles/image-1.jpg?v=1531354102'
                        about='2x revenue per session from replen flows'
                        description='"Truly,it is helped the repeat purchase rate because we know when someone might need to replenish"'
                        title='Kopari Beauty' />
                </a>
                <a className="details-link" href="https://blog.getrepeat.io/black-girl-vitamins-improves-margins-by-activating-customers-at-key-retention-moments/?_gl=1*1g5jtrv*_ga*MTEyMTY5NzIzNS4xNjk0NzUzNzQz*_ga_RT32N17D8W*MTY5NDgzNjY0Mi4zLjEuMTY5NDgzNjgxNS42MC4wLjA.">
                    <FaveBrandsProps img='https://blackgirlvitamins.co/cdn/shop/products/collagen-perfume_1_620x.jpg?v=1672646670'
                        about='Improved margins for returning customers'
                        description='"The product works it does what it is supposed to do with minimal effort from out team"'
                        title='Black Girl Vitamins'
                    />
                </a>
            </div>

            <div className="logos">
                <div>
                    <img className="each-logo" src="data:image/webp;base64,UklGRgoDAABXRUJQVlA4IP4CAADQEwCdASqzAG4APt1ur1OopiQiorJJWRAbiWlu4XSRKlal98GV7wQ0qc07yBvmBVXyXIvkuRfJci+S5Fn1CB8thvO8RIHmS77SlAsM61EdeGQCohAb/f60SMLJuXqrzTrkxvtHPXbltfQ73W6pc1uu984yHjqOD0jN6+gf+nedefAApIBRz021ULNgIN01rm/1/Z1MrMFTseQFRocyuzNdX/Glci+PAAD+/qTqV4WozbuF4PsI2uiL9fsK46C2++QX5H8Zb1f6eY75q+yh036uFF2tevUfdc3xUWX2x6SeKzcDIqi9Jzo6Ee+Zjm2UCuOVEt3VgKM6bjC+K3bE+YtdYG/h399ZVa/vKB4ie7auJjFS1SYwx/lDi/V47XjLBgUWJZXumj3WrbbYxeTuIqnbYB8jbn8LTom1jk2rZp5mHAdeOp8s5GQ74Vl2rfgyACA8RTs5zmP+xFIiwBBGN7rcZq38AnC2LtQo67cZbew48T/fEAbq9qp+rH+FPwZWQqm52zOVjJQAsnFA7/rl1PQMr1+lUBmS3UiASMxJzyZQkIViJOMaaJShBywmO4JbTTmOZTwsh5N61Rm+wuKKqGQ9nB8Um22GozStbNQ/H37s81LpBqetxOMHyXNKIQfVXyi9SL6fwIzNzxsI6OGsNuZhyOQNKRIhkwRM8BG+n3NATamofrUE5O6ytR1rDf51YHmHyJQBqnmg+YIPruD80MjiQrT6quZ6VtyZQKGTp+W7PaasoNtedeMMfwAf6OLPqAl6f5UeFiU59LXw4fpAYXcpX7V5OTuZypl/MxmnS32AtHMge2fSc9+vySQ5/xCt/sfPZOisRMuPr7+oxdT+4pwkLzxb37QRugvTas+lamz/drdd5eZ1ZHqy3ehYqU+GBQwN2CgbE13G6aHnbF/rGKxu6R//ce7KApWLV159XeldAE72/82AIvDSy4cX+sBX6yJyrArmhpKLXQutM78MPy2r8zVc7L94PZMe2cgHSp5YTiTfVm8oMZquhwAAAAAA"/>
                </div>
                <div>
                    <img className="each-logo" src="data:image/webp;base64,UklGRpoDAABXRUJQVlA4II4DAACQFwCdASrIAHwAPt1ur1OopqQiofK5IRAbiWlu4XNBG+wA6dnhH4QfXftHlJw3Gyt7t5jfXTnz8ICYr5nOf793/ZANl93r5fn2uXZEHDt99lpkF7XLv+5wKvolwqgZqskKIRpMDy7HFnfnwlBMqwfZeT0xxGKDHi6rWUAYWZLqEoccva5aw3VwPqKvPcch1IgCfCDOYJD6lsLi5/f9xZsFmuMBmgG8alAejHO4XoUlWF7XLv+4s7h/ZLxBU1YXtcZmOi9gAAD+x4yODYmXCs3W2eQR9toRzy9YuPb7PWLHFdBEGNh0VGN1+lPNif1IySJQq0Je2dqAg4gC/KQ9AEJInVgKgSuYrU3H+cPhVUBbA8fDxKpRrSme2slrUp+0nfcmSbhTVqct6sSzaBl+geLfuX4vKxodfecsPwMUHYWfmHh7gu3BqirT/O+Xz80VE9YD/1/v9Kd0tTZt90kz7+4EWRUhMenvq6tJF34D7DLT+DJwQdFfqFkqzdN4TZZtXvA2+0mxKCBOaPz32QYefwT8HksyLJmjxIhvps3vOZB9Ucx8vAK/FAFubjmsIJT1yftF5G6lc7dffs7WBnpmRR9cL3IMgJIQNw7jZsFr3rP6XzwH7+JjCM8NP0QS4VCg7ac9qvgnS/JS8/eJym013CwozPPUU2/vxeGhwLmt2TphQx5oBD8kGpApHgV9uZonBu+1vi97zYfSzN52Bmjdh7BNEZ9jcJu839fw7JTDi4UHX4648ZyLwzfwHM4YKrGdft6NSHGXaAPw2oh+vbyM/hiT2vSK7azk9SFDyGwMtxFkQDyx7W90+fp4mzT244/gw47omjoCmR0JqR2ew4x5fWrpnuaeWh60LcOOd+mXnUv8+IIDsOQoX2JdI6QzXF8atqr2CuItGhEBGAB4RsVyrJsApI5AjWIoJJPqBtqqeNtXj056FxdX+M1eS94fhmH7p0bSjYxhdyVG3ryfkSCjtSMMO3TRW8O8baaM+6BcFtGP86QNyoIKvf+uOwyvJEHAjDYO8ZOmah7/dsdXz+eBxJEGHcJboSAYN6AJ6KQVK7WNamT9sECkrvcPWKl2SP11g8eL9E9g6oTComYrWhL6hOjRExhkbagip59z3s0jfogyHUXci2MpfQCRtR0s5xeudl9PYQQAsnj5kuYgMZsZ29zaFYMJKwxqA9xSWlFRNUXsXDY2iUirdU9ryAGAAAAA" />
                </div>
                <div>
                    <img className="each-logo" src="data:image/webp;base64,UklGRqQCAABXRUJQVlA4IJgCAADQEQCdASrAAHAAPt1urlMopiQiolqpcRAbiWlu4XVBKg6f/DTvnlbMDtMHNJ8jf1BqAAr+S5F8lyL5LkXyXIs8fua+KVg96Yoq6vfmG7r944bb+Asl1E0/leIA/FdsfqU4G5FPO12A+e/OjbvGKCYbgitc/NP4cMlopk3zAUJ7/TsZ3rm6hThw2vQS3Rrq/40rkXyXISgAAP7+/Ak/oHnGROjKRVDIsoKH3Rx5jl//Txh3u2QB/vLyTgOPlV6lgl741O4Uox4hfGAZ/BqRYVSpBOw/WmOAY5nUM0g0T4VNY/U4L5urnAFcL/HPkJmoP88ehzxx8ywjbN4RvAVNxNlgSwYSWl4rZMJWPVwNxqj2QeYf2/QT1ZR40LEuoOh9ODPaHI9cRBG/N3+wBuFHU0v3OHv9QGdqdpsMLl/x3L+N1US/nC5r4qGWmK+HOOcAXWliVycrhJsel6EVDFC+R+fDprlcigQKNUOGYPu8LV4vryP82mRiN89WRwW9ouVc+ISbm+0oRHF/0Rz0OO/q6ODiMETE5l+pxZA9j5LUdt0icPT8UqKXKNEf2v4glZGus8xlYClz2BqmLrq02bbQ2hlL2vZl0nptt5MsDojXZNn7zZ5EW+uDjsXbc9G5xxM9wuKuCxXVzLzvuBIjBEmoJ7ZH0g35lsY3bsgRNBAE7MPlFCnHxr0oUP2xyaJh180l5mtr5631FlPrIy/9y+8iejuJAUHOBjlXKP1Fa3bjtxy4vzSmfnN7GjX+Uf3u1kvGsCH+Co4/tOFqZZ/Ty8gSsIRRalnlIV3EjqMyx2GFIlH23WwjH94SQWeO67ccBKEoLnHtiLPDWZjFtC93qgDngMC7xFGrTZt/MBpnFNakHOBkfrAAS1qZgAAA" />
                </div>
                <div>
                    <img className="each-logo" src="data:image/webp;base64,UklGRm4CAABXRUJQVlA4IGICAAAwEQCdASq3AGwAPt1or1OopSQiofM5IRAbiWlu4XVBRJdM3w0ywuAGk7mf+Pp7AIYrwL2uXf9w4QsJfn2r+LZlSTyQSQFmX0Bs/JLsZHQoLmOkliu/suQtRKTFsFthLEwUy2tz2nW8JmlrlflEVGEnN7/qdJUXnOfV17i1FknD0fdFSe4pqwva5d/3Fnfn2uWkAAD+/vJP6aG2LPmib+5LUiV9nGFnYGW6jRHGeEGmtePq7cNoNwM8WGX8Dvfntj/MV3VE75HMdAFvUhN+B+bgylZLqpBx7D9uKouEHwDPPmz+sPk7Spnv5ECRMTBVupR9EO3NwOz9uuy0dB/0Fm3QKX75ICI9u3xJzf+ufMnxfUYu4ujO2sDLy13qfl3J7P3NlL1Mf7QtO+w9vrfnUupgKSnlkCLdmZ5MKQOvYG1Somhg8Hl9Dz8p6R3O0QxubI0lzhoLBBVEvAibqqV0PcM58XzpOoi9LOt+ZDn6mkh2saUDzDIlmo6nWYkwPUIHzpDhqpCedu3COnFbLBgwcCG8+7Nd9cEFx+eQ/ArK0yw/Mtlrw0Thxcs3LYzMMQ93mKDZSqvCNeJ0ob2JpTdY7wiD6Dq+lHdFCyeYA/GouD6ne5jsL2fb/Q+/9xb9pSZq9upfcRD25bLgXbSFeOPsLuiqUJ5WlZvfdPTJMK/emd4XdRoBwrFY/Pj0HcEvhP01rfAE1rMTl038iYRDJuma6MmwQr6miQ9kxADpgliKxL9Yj0i+8fShQRoZd8FOktOKm4y5sY45jiVTG3vxmqUM+nDJqLG9Ow0d2+JkPH5pmHUAAAAA" />
                </div>
            </div>
        </div>
    )
}

export default FaveBrands;