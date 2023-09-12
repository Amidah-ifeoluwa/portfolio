import React, { useState } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider">
            <button onClick={prevSlide}>Previous</button>
            <div className="slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slider;
