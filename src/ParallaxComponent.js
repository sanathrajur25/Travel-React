import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moon from './Pictures/forest.mp4';
import moon2 from './Pictures/sunrise.mp4';
import land from './Pictures/star.mp4';
import logo from './Pictures/logo.jpg';
import './start.css';
import PlannerPage from './PlannerPage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function ParallaxComponent() {
  const ref = useRef();
  const [typingAnimation, setTypingAnimation] = useState(false);

  const scrollToSection = (sectionIndex) => {
    ref.current.scrollTo(sectionIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingAnimation((prevAnimation) => !prevAnimation);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <nav
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '20px',
          zIndex: 2,
        }}
      >
        <img
          src={logo}
          alt="Background Image"
          style={{
            borderRadius: '50%',
            border: '1px solid black',
            width: '18%',
            position: 'absolute',
            top: '7vh',
            right: '360%',
            zIndex: 0,
          }}
        />
        <h2
          style={{
            color: 'black',
            fontSize: '30px',
            position: 'absolute',
            fontStyle: 'sans-serif',
            top: '0vh',
            right: '310%',
            zIndex: 1,
          }}
        >
          Explore Unbound
        </h2>
        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
          <li
            style={{
              marginRight: '10px',
              cursor: 'pointer',
              borderRadius: '25px',
              border: '1px solid #00ced1',
              backgroundColor: '#00ced1',
              padding: '10px',
            }}
            onClick={() => scrollToSection(0)}
          >
            Home
          </li>
          <li
            style={{
              marginRight: '10px',
              cursor: 'pointer',
              border: '1px solid #00ced1',
              borderRadius: '25px',
              backgroundColor: '#00ced1',
              padding: '10px',
            }}
            onClick={() => scrollToSection(1)}
          >
            About
          </li>
          <li
            style={{
              marginRight: '10px',
              cursor: 'pointer',
              border: '1px solid #00ced1',
              borderRadius: '25px',
              backgroundColor: '#00ced1',
              padding: '10px',
            }}
            onClick={() => scrollToSection(2)}
          >
            Contact
          </li>
        </ul>
      </nav>

      <Parallax pages={4} ref={ref} style={{ height: '100%', width: '100%' }}>
        <ParallaxLayer offset={0} speed={0.5} factor={1.75}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          >
            <h2
              className={`typewriter ${typingAnimation ? 'animate' : ''}`}
              style={{ color: 'black', fontSize: '45px', position: 'absolute', top: '20%', left: '25%', zIndex: 1 }}
            >
              Unleash your adventurous spirit!
            </h2>

            <Link to="/planner" style={{ textDecoration: 'none' }}>
            <button
                className="start-journey-button"
                onClick={() => scrollToSection(1)}
              >
                Start Your Journey
              </button>
            </Link>
            <video
              src={moon2}
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} factor={3}>
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <video
              src={moon}
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              position: 'absolute',
              top: '15%',
              left: '20%',
              right: '20%',
              zIndex: 1,
            }}
          >
            Welcome to our adventure trip planning website! We are passionate about helping thrill-seekers and travel enthusiasts create unforgettable experiences. Whether you're an adrenaline junkie seeking extreme adventures or a nature lover looking for serene outdoor getaways, our platform is here to assist you. Discover a wide range of thrilling activities, breathtaking destinations, and expertly curated itineraries to fuel your wanderlust. Our dedicated team of travel experts is committed to providing you with valuable resources, insider tips, and personalized recommendations to ensure every step of your adventure is memorable. Get ready to embark on an exhilarating journey filled with adrenaline-pumping activities, awe-inspiring landscapes, and lifelong memories.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} factor={4}>
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <video
              src={land}
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <p
            style={{
              color: 'white',
              fontSize: '30px',
              position: 'absolute',
              top: '10%',
              left: '30%',
              right: '30%',
              zIndex: 1,
            }}
          >
            Email: exploreunbound@gmail.com<br />
            Phone: 450-449-5050<br />
            Instagram: explore_unbound<br />
          </p>
        </ParallaxLayer>

        {/* Additional layers... */}
      </Parallax>
    </div>
  );
}

export default ParallaxComponent;
