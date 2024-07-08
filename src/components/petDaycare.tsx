import '../style/petDaycare.css';
import { useNavigate } from 'react-router-dom';
import dogImage from '../assets/categories/Group28.png'; // Add the correct path to your image
import Header from './Header';

const petDaycare = () => {
    const navigate = useNavigate();
  return (
    
    <section className="category-section">
      <Header />
      <header className="category-header">
        <h1>Categories</h1>
      </header>
      <div className="category-content">
        <div className="category-text">
          <h2>Pet Daycare</h2>
          <p>
          Pet daycare offers a safe and stimulating environment 
          for pets while their owners are away, providing companionship,
          exercise, and socialization opportunities. 
          Supervised by trained staff, pets engage
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
          <img src={dogImage} alt="Pet Day" />
        </div>
      </div>

    </section>
  );
};

export default petDaycare;