import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/*left*/}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText">
                        All deserve a place to call home
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Information </span>
                    <span className="secondaryText">254 NAIROBI</span>
                    <div className="flexCenter f-menu">
                        <span>Properties</span>
                        <span>Services</span>
                        <span>product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Footer