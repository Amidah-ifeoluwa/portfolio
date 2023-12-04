import React, { useState } from 'react';
import { FaGlobe } from "react-icons/fa";
import { FaGithub, } from "react-icons/fa6";
const links = [
    { name: <FaGithub className="text-[25px]" />, href: 'https://github.com/Amidah-ifeoluwa/WeAid' },
    { name: <FaGlobe className="text-[25px]" />, href: 'https://weeaid.netlify.app/home.html' },
]
const WeAid = ({ we }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === we.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? we.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider w-2/5 h-auto">

            <div className="slide">
                <div className="md:pt-0 pt-8 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white flex lg:gap-x-10">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-blue-500">
                            {link.name} <span aria-hidden="true">&rarr;</span>
                        </a>
                    ))}
                </div>
                <img src={we[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>

            <div className='flex justify-between mb-28'>
                <button className='text-lime-100' onClick={nextSlide}>Previous</button>
                <button className='text-lime-100' onClick={prevSlide}>Next</button>
            </div>


        </div>
    );
};

export default WeAid;
