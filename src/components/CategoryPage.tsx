import { useNavigate } from 'react-router-dom';
import '../style/CategoryPage.css';
import Header from './Header';
import dogImage from '../assets/categories/Group26.png'; // Add the correct path to your image


const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
    <div className="category-page">
      <header className="category-header">
        <h1>Categories</h1>
      </header>
      <div className="category-content">
        <div className="category-text">
          <h2>Pet Grooming</h2>
          <p>
            Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nails.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="category-image">
          <img src={dogImage} alt="Pet Grooming" />      
        </div>
      </div>
      <div className="category-links">
        <button onClick={() => navigate('/pet-grooming')}>Pet Grooming</button>
        <button onClick={() => navigate('/pet-clinic')}>Pet Clinic</button>
        <button onClick={() => navigate('/pet-daycare')}>Pet Daycare</button>
        <button onClick={() => navigate('/pet-training')}>Pet Training</button>
      </div>
    </div>
    </div>
  );
};

export default CategoryPage;