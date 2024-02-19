import React, { useState } from "react";
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const Header = () => {
    const [menuOpen, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened ? "-100%" : "0" };
        }
        return {};
    }

    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler 
                    onOutsideClick={() => setMenuOpened(false)}
                >
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
                        <a href="">Residencies</a>
                        <a href="">Us</a>
                        <a href="">Contact us</a>
                        <a href="">Get started</a>
                        <button className="button">
                            <a href="">Contact us</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
}

export default Header;
