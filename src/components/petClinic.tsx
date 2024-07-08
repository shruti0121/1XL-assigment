import '../style/petClinic.css';
import { useNavigate } from 'react-router-dom';
import dogImage from '../assets/categories/Group27.png'; // Add the correct path to your image
import Header from './Header';

const petClinic = () => {
    const navigate = useNavigate();
  return (
    
    <section className="category-section">
      <Header />
      <header className="category-header">
        <h1>Categories</h1>
      </header>
      <div className="category-content">
        <div className="category-text">
          <h2>Pet Clinic</h2>
          <p>
          The pet clinic offers comprehensive veterinary services, 
          including medical consultations, vaccinations, and surgical procedures, 
          ensuring the well-being of furry companions. The clinic provides compassionate care and 
          support to pets and their owners.
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
          <img src={dogImage} alt="Pet Clinic" />
        </div>
      </div>
      
    </section>
  );
};

export default petClinic;