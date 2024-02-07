import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProfilePage from './pages/ProfilePage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import NotFoundPage from './pages/NotFoundPage'


import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre-mi' element={<AboutMePage />} />
        <Route path='/proyectos' element={<ProjectsPage />} />
        <Route path='/perfil' element={<ProfilePage />} />
        <Route path='/proyectos/:project_id' element={<ProjectDetailsPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  )
}

export default App
