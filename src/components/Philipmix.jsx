import React, { useState } from 'react';

const Philipmix = ({ philip }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === philip.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? philip.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider w-2/5 h-auto">

            <div className="slide">
                <img src={philip[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>

            <div className='flex justify-between mb-28'>
                <button className='text-lime-100' onClick={nextSlide}>Previous</button>
                <button className='text-lime-100' onClick={prevSlide}>Next</button>
            </div>


        </div>
    );
};

export default Philipmix;
