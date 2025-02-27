import React from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const CarouselNavigation = React.memo(({ 
  currentCategory, 
  skillsLength, 
  handleSlide, 
  setCurrentCategory 
}) => {
  const buttons = React.useMemo(() => 
    Array.from({ length: skillsLength }, (_, index) => (
      <button
        key={index}
        className={`carousel-indicator ${index === currentCategory ? 'active' : ''}`}
        onClick={() => setCurrentCategory(index)}
        aria-label={`Go to category ${index + 1}`}
      />
    )), [skillsLength, currentCategory, setCurrentCategory]);

  return (
    <div className="carousel-navigation">
      <div className="projects-navigation">
        <button 
          className="nav-button prev" 
          onClick={() => handleSlide('prev')}
          aria-label="Previous category"
        >
          <IoArrowBack />
        </button>
        <div className="carousel-indicators">
          {buttons}
        </div>
        <button 
          className="nav-button next" 
          onClick={() => handleSlide('next')}
          aria-label="Next category"
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
});

CarouselNavigation.displayName = 'CarouselNavigation';
export default CarouselNavigation; 