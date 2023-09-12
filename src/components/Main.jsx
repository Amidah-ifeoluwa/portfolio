import React, { useEffect, useRef, useState } from "react";
import { ife, } from '../assets'
import { TypeAnimation } from 'react-type-animation'
import Service1 from './Service1'
import Projects1 from './Projects1'
import Contact from './Contact'
import Languages from './Languages'
// import Footer from './Footer'

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

const Main = () => {
    return (

        <section id='home'>
            {/* <div className="w-full h-full bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/wave-background-abstract-gradient-design_483537-3688.jpg?w=1060&t=st=1694277705~exp=1694278305~hmac=75a5d5d39657d5b0c4c04e390d8515bd384e378791207ced40794c2e1566ba54')]"> */}
            <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
                <div className='block justify-around items-center pt-0 md:flex md:pt-32 bg-cover bg-center' >
                    <div className='ml-5 md:ml-12'>
                        <div className='block my-16 '>
                            <div className='text-lime-100 text-[15px] md:text-[28px] my-12 font-bold'>
                                <div >
                                    <h4 className='text-[32px] md:text-[52px] font-bold md:pt-0 pt-8'>I'm Agbaje Ifeoluwa </h4>
                                </div>
                                <TypeAnimation
                                    sequence={[
                                        'a Frontend Developer',
                                        1000,
                                        'a Backend Developer',
                                        1000,
                                        'a Graphic Designer',
                                        1000,
                                        // 'We produce food for Chinchillas',
                                        // 1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </div>
                            <div>
                                <p className='text-[20px] md:text-[23px] text-lime-100 pd-0 md:pb-8'>
                                    I like to craft solid and scalable frontend products <br />
                                    <span> with great user experience</span>
                                </p>
                            </div>

                        </div>
                        <div className='flex text-lime-100'>
                            <div>
                                <p className='text-[15px] md:text-[20px]'>Highly skilled at progressive <br />
                                    enhancement, design systems & <br />
                                    UI Engineering</p>
                            </div>
                            <div className='pl-10 md:pl-16 text-lime-100 pb-10 md:pb-0'>
                                <p className='text-[15px] md:text-[20px]'>Proven experience building <br />
                                    successful products for clients <br />
                                    across several countries.</p>
                            </div>
                        </div>
                    </div>
                    <div className='items-center'>
                        <img src={ife} alt="Ife" className='items-center md:w-[400px] w-full md:max-w-full md:h-auto mr-0 md:mr-44 md:mb-0 mb-10' />
                    </div>
                </div>
            </div>
            <RevealOnScroll>
                <Languages />
            </RevealOnScroll>
            <RevealOnScroll>
                <Service1 />
            </RevealOnScroll>
            <RevealOnScroll>
                <Projects1 />
            </RevealOnScroll>
            <RevealOnScroll>
                <Contact />
            </RevealOnScroll>

            {/* <Footer /> */}
        </section >


    )
}

export default Main