import React, { useState } from 'react';

const Filmbyba = ({ ba }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === ba.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? ba.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider w-2/5 h-auto">

            <div className="slide">
                <img src={ba[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>

            <div className='flex justify-between mb-28'>
                <button className='text-lime-100' onClick={nextSlide}>Previous</button>
                <button className='text-lime-100' onClick={prevSlide}>Next</button>
            </div>


        </div>
    );
};

export default Filmbyba;
