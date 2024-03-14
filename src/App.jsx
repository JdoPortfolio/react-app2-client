import { Routes, Route } from 'react-router-dom';
import { SharedVariablesProvider } from './context/SharedVariableContextFile';
// Page components:
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProfileDashboard from './pages/ProfileDashboard.jsx';
import CreateProfilePage from './pages/CreateProfilePage.jsx';
import MatchesSelectedPage from './pages/MatchSelectedPage.jsx';
import MatchDogsPage from './pages/MatchDogsPage.jsx';
import MyDogsPage from './pages/MyDogsPage.jsx';
import EditDogPage from './pages/EditDogPage.jsx';
// import Chat from './pages/Chat.jsx';

import 'flowbite'; 

// Styling:
import './App.css';


function App() {
  return (
    <SharedVariablesProvider> 
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfileDashboard />} />
          <Route path="/createprofile" element={<CreateProfilePage />} />
          <Route path="/matches/:dogId" element={<MatchDogsPage />} />
          <Route path="/mydogs" element={<MyDogsPage />} />
          <Route path='/edit-dog/:dogId' element={<EditDogPage />} />

        </Routes>
      </div>
    </SharedVariablesProvider>
  );
}

export default App;








