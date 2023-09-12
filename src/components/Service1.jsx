import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation'
import { filmbyoasis1, ife, weaid1 } from '../assets'

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

const Service1 = () => {
    return (
        <section id='home' className=''>
            <RevealOnScroll>
                <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background1.jpg')]">
                    <div className='md:flex block md:mt-5 justify-normal md:px-24 md:mb-1'>
                        <div className='text-lime-100'>
                            <img src={ife} alt="service" className='md:w-[500px] w-full md:max-w-full md:h-auto my-8' />

                        </div>
                        <div className='block pl-3 md:pl-52 items-center pt-0 md:pt-24'>
                            <div className='text-lime-100 pb-5 md:pb-3 md:text-[56px] text-[40px] font-bold' >
                                <h1>My Services</h1>
                            </div>
                            <div className='text-lime-100 md:text-[20px] text-[15px] md:pr-0 pr-2'>
                                Let's be honest and cut through the marketing bullshit,
                                <br />you need a website that looks amazing and actually works.
                                <br />The bottom line, that's what I do. If you want to learn more
                                <br />about working with me, look through my website. <br />
                            </div>
                            <div>
                                <button className='bg-black text-lime-100 p-4 px-14 border-solid border-lime-100 border-2 mt-4 hover:-translate-y-1'>
                                    <a href="service">Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Service1
