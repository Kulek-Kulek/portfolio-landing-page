import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import Sample from './Pages/Smples/Sample';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/mobile' element={<Sample />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
