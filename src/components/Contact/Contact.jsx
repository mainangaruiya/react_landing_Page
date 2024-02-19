import React from "react";
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText">our contacts</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText"> Here to provide the best services to you</span>
                     
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColstart detail">
                                        <span className="primaryText">Call</span>
                                        <br/>
                                        <span className="secondaryText">0797115799</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            {/*second */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColstart detail">
                                        <span className="primaryText">Chat</span>
                                        <br/>
                                        <span className="secondaryText">0797115799</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>


                        </div>
                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColstart detail">
                                        <span className="primaryText">Video call</span>
                                        <br/>
                                        <span className="secondaryText">0797115799</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                            {/*fourth*/}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColstart detail">
                                        <span className="primaryText">Message</span>
                                        <br/>
                                        <span className="secondaryText">0797115799</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
