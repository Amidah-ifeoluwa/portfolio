import React, { useEffect, useRef, useState } from "react";
import { filmbyoasis1, weaid1 } from '../assets'
import { FaGithub } from "react-icons/fa";
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

const Projects1 = () => {
    return (
        <section id='Home' className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
            <RevealOnScroll>
                <div className='block md:w-10/12 w-full md:pl-64 pt-10 md:pt-32 pt-14 text-white px-2'>
                    <h4 className='text-[14px] text-blue-700  pb-5'>MY LATEST PROJECTS</h4>
                    <h1 className='text-[26px] md:text-[40px] leading-none'>Take a look at some of the latest projects I've been working on.</h1>
                </div>
            </RevealOnScroll>
            <div className=' flex justify-around px-5'>
                <RevealOnScroll>
                    <div className="my-0 md:my-32 ">
                        <div className="relative block group mt-10">
                            <h6 className='text-blue-700 underline md:pb-5 hover:text-white'><a href="https://filmbyoasis.netlify.app/index2">FILMBYOASIS</a></h6>
                            <a href="https://filmbyoasis.netlify.app/index2"><img src={filmbyoasis1} alt="weaid" className='w-[550px] max-w-full h-auto hover:brightness-90' /></a>
                            <div className="relative">
                                <div className="">
                                    {/* Hidden content */}
                                    <div className="transition-all transform
        translate-y-8 opacity-0
        group-hover:opacity-100
        group-hover:translate-y-0">
                                        <div className=" bg-gray-700 p-0 md:p-1 mb-20">
                                            <a href="https://github.com/Amidah-ifeoluwa/film-by-oasis"><FaGithub className="text:[15px] md:text-[30px]" /></a>
                                        </div>
                                    </div>
                                    {/* End of hidden content */}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>




                <RevealOnScroll>
                    <div className=' mt-32 md:mt-72 cursor-pointer'>
                        <div className="relative block group">
                            <h6 className='text-blue-700 underline p:2 md:pb-5 hover:text-white'><a href="https://weeaid.netlify.app/home.html">WEAID</a></h6>
                            <a href="https://weeaid.netlify.app/home.html"><img src={weaid1} alt="weaid" className='w-[550px] max-w-full h-auto hover:brightness-90' /></a>
                            <div className="relative">
                                <div className="">
                                    {/* Hidden content */}
                                    <div className="transition-all transform
        translate-y-8 opacity-0
        group-hover:opacity-100
        group-hover:translate-y-0">
                                        <div className=" bg-gray-700 p-0 md:p-1">
                                            <a href="https://github.com/Amidah-ifeoluwa/WeAid"><FaGithub className="text:[15px] md:text-[30px]" /></a>
                                        </div>
                                    </div>
                                    {/* End of hidden content */}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}

export default Projects1





{/* <img src={weaid1} alt="weaid" className='w-[700px] max-w-full h-auto hover:brightness-90' />
<h6 className='text-blue-700 underline pt-5 hover:text-lime-100'><a href="#">WEAID</a></h6>
<div className=" bg-gray-700 py-2">
    <a href="https://github.com/Amidah-ifeoluwa/film-by-oasis"><FaGithub className="text-[30px]" /></a>
</div> */}

{/* <div className='my-32 cursor-pointer'>
<img src={filmbyoasis1} alt="filmbyoasis" className='w-[700px] max-w-full h-auto hover:brightness-90' />
<h6 className='text-blue-700 underline pt-5 hover:text-lime-100'><a href="#">FILMBYOASIS</a></h6>
</div> */}