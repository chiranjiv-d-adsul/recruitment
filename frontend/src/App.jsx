import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CandidateSearchPage from './pages/CandidateSearchPage';
import axios from 'axios';

axios.defaults.baseURL = "https://recruit-backend-gwku.onrender.com/api/";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/candidate-search' element={<CandidateSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
