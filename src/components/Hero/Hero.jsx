import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
    return(
        <section className="hero-wrapper">
            <div className='paddings innerWidth flexCenter hero-container '>
                {/* left side*/}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration:2,
                            type:"spring"
                        }}
                        
                        >
                            Discover THE <br/>
                            amazing homes in <br/> 254
                        </motion.h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Find your dream place </span>
                        <span className='secondaryText'>Dont dream it live it </span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type='text'/>
                        <button className="button">search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='flexColCenter'>Premium properties</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='flexColCenter'>Happy customers</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='flexColCenter'>Award winnings</span>
                        </div>
                    </div>
                
                </div>
                 {/* right side*/}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hero; 