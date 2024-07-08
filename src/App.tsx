import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
// import CategoryPage from './components/CategoryPage';
import PetGrooming from './components/petGrooming';
import PetClinic from './components/petClinic';
import PetDaycare from './components/petDaycare';
import PetTraining from './components/petTraining';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<PetGrooming />} />
        <Route path="/pet-grooming" element={<PetGrooming />} />
        <Route path="/pet-clinic" element={<PetClinic />} />
        <Route path="/pet-daycare" element={<PetDaycare />} />
        <Route path="/pet-training" element={<PetTraining />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;