import { useState, useEffect } from 'react';
import '../style/HeroSection.css';
import imageOne from '../assets/homepage/Group 31.png';
import imageTwo from '../assets/homepage/Group 32.png';
import imageThree from '../assets/homepage/Group 33.png'
import imageFour from '../assets/homepage/Group 34.png';
import imageFive from '../assets/homepage/Group 35.png' // Add more images as needed


const HeroSection = () => {
  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive]; // Add more images as needed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Taking care of your pets</h1>
        </div>
        <div className="hero-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              //alt={⁠ Hero ${index} ⁠}
              className={index === currentImageIndex ? 'visible' : 'hidden'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;