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
                <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
                    <div className='md:flex block md:mt-5 justify-normal px-2 md:px-10 md:mb-1 w-full'>
                        <div className='text-lime-100'>
                            <img src={ife} alt="service" className='items-center md:w-[320px] w-9/12 ml-12 md:ml-28 md:max-w-full md:h-auto mr-0 md:mt-12 md:mb-0 mb-10' />

                        </div>
                        <div className='block pl-3 md:pl-60 items-center pt-0 md:pt-10 md:w-8/12 w-full'>
                            <h1 className="text-[15px] text-blue-700">You dream, I build</h1>
                            <div className='text-white py-5 md:pb-3 md:text-[32px] text-[28px] font-bold' >
                                <h1>Where Innovation Meets Impeccable Development.</h1>
                            </div>
                            <div className='text-white md:text-[15px] text-[15px] md:pr-20 pr-2'>
                                Let's be honest and cut through the marketing scheme,
                                you need a website that looks amazing and actually works.
                                The bottom line, that's what I do. If you want to learn more
                                about working with me, look through my website.
                            </div>
                            <div>
                                <button className='bg-black text-white p-3 px-14 border-solid border-lwhite border-2 mt-10 hover:-translate-y-2'>
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
