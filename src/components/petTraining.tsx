import '../style/petTraining.css';
import { useNavigate } from 'react-router-dom';
import dogImage from '../assets/categories/Group29.png'; // Add the correct path to your image
import Header from './Header';

const petTraining = () => {
  const navigate = useNavigate();
  return (
    
    <section className="category-section">
      <Header />
      <header className="category-header">
        <h1>Categories</h1>
      </header>
      <div className="category-content">
        <div className="category-text">
          <h2>Pet Training</h2>
          <p>
            Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance,
            which includes tasks like washing, brushing, trimming fur, and clipping nails.
          </p>
          <button className="get-started-button">Get Started</button>
          <div className="category-links">
          <button id='btu-One' onClick={() => navigate('/pet-grooming')}>Pet Grooming</button>
            <button id='btu-two' onClick={() => navigate('/pet-clinic')}>Pet Clinic</button>
            <button id='btu-three' onClick={() => navigate('/pet-daycare')}>Pet Daycare</button>
            <button id='btu-four' onClick={() => navigate('/pet-training')}>Pet Training</button>
          </div>
        
        </div>
        <div className="category-image">
          <img src={dogImage} alt="Pet Training" />
        </div>
      </div>
     
    </section>
  );
};

export default petTraining;