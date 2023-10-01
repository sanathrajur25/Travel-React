import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CityPictures.css';

const CityPictures = () => {
  const carouselRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const imageList = [
    { id: 1, src: './Pictures/manali.jpeg', alt: 'Manali', name: 'Manali' },
    { id: 2, src: './Pictures/goa.jpeg', alt: 'Goa', name: 'Goa' },
    { id: 3, src: './Pictures/ladakh.jpeg', alt: 'Ladakh', name: 'Ladakh' },
  ];

  return (
    <div className="carousel">
      <div className="carousel-slide" ref={carouselRef}>
        {imageList.map((image, index) => (
          <Link to={`/city/City${image.id}`} key={image.id}>
            <div
              className={`slide ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image.src} alt={image.alt} />
              <div className="image-name">{image.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <button className="carousel-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="carousel-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default CityPictures;
