import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Resort.css';
import Resort1 from './Resort1';

const Resort = () => {
  const carouselRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollLeft3 = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const scrollRight3 = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const imageList = [
    { id: 1, src: './Pictures/Res1.jpg', alt: 'Resort', name: 'Natures Nest Goa' },
    { id: 2, src: './Pictures/Res2.jpg', alt: 'Resort2', name: 'Rockvalley,Goa' },
    { id: 3, src: './Pictures/Res3.jpg', alt: 'Resort3', name: 'Maya' },
    // Add more image objects as needed
  ];

  return (
    <div className="carousel3" ref={carouselRef}>
      <div className="carousel-slide3">
        {imageList.map((image, index) => (
          <Link to={`/resort/Resort${image.id}`} key={image.id}>
            <div
              className={`slide3 ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image.src} alt={image.alt} />
              <div className="image-name3">{image.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <button className="carousel-button left3" onClick={scrollLeft3}>
        &lt;
      </button>
      <button className="carousel-button right3" onClick={scrollRight3}>
        &gt;
      </button>
    </div>
  );
};

export default Resort;
