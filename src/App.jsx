import { Routes, Route } from 'react-router-dom';
import { SharedVariablesProvider } from './context/SharedVariableContextFile';
// Page components:
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProfileDashboard from './pages/ProfileDashboard.jsx';
import CreateProfilePage from './pages/CreateProfilePage.jsx';
import MatchesSelectedPage from './pages/MatchSelectedPage.jsx';
import MatchDogsPage from './pages/MatchDogsPage.jsx';
// import Chat from './pages/Chat.jsx';

import 'flowbite'; // Assuming this is a CSS or UI library import

// Styling:
import './App.css';
function App() {
  return (
    <SharedVariablesProvider> {/* Wrap your app component tree with SharedVariablesProvider */}
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfileDashboard />} />
          <Route path="/createprofile" element={<CreateProfilePage />} />
          <Route path="/matches" element={<MatchDogsPage />} />
          {/* <Route path="/chat" element={<Chat/>} /> */}
          {/* Uncomment and use additional routes as needed */}
        </Routes>
      </div>
    </SharedVariablesProvider>
  );
}

export default App;







// import { Routes, Route } from 'react-router-dom';
// import { SharedVariablesProvider } from './context/SharedVariableContextFile';
// import { Link } from 'react-router-dom';
// // Page components:
// import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
// import ProfileDashboard from './pages/ProfileDashboard.jsx';
// import CreateProfilePage from './pages/CreateProfilePage.jsx';

// import 'flowbite';

// //Components:

// // Styling:
// import './App.css';



// function App() {

//   return (
//     <div className="App">
    
//       <Routes> 
//       <Route path="/" element={<LandingPage />} /> 
//       <Route path="/about" element={<AboutPage />} /> 
//       <Route path="/profile" element={<ProfileDashboard />} /> 
//       <Route path="/createprofile" element={<CreateProfilePage />} /> 

//         {/* <Route path="/" element={ <HomePage /> } />
//         <Route path="/projects" element={<ProjectListPage />} />
//         <Route exact path="/projects/create" element={<CreateProjectPage />} />  
//         <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
//         <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } /> */}
//       </Routes>

      
//     </div>
//   )
// }

// export default App
