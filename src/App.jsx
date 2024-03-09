import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SharedVariablesProvider } from './context/SharedVariableContextFile';
import LandingPage from './pages/LandingPage';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css'

function App() {

  return (
    <div className="App">
      
     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
     {/* < LandingPage/> */}
      <Navbar/>
      <Routes> 
      <Route path="/" element={<LandingPage />} />     
        {/* <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />  
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } /> */}
      </Routes>
      
    </div>
  )
}

export default App
