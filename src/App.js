import { Route, Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import Homepage from './pages/Homepage'
import Projects from './pages/Projectspage'
import Guides from './pages/Guidespage'
import About from './pages/Aboutpage'
import Plants from './pages/Plantspage'
import NoPage from './pages/NoPage'

import NavigationBar from './NavigationBar'

const App = () => {
  return (
  <>
    <HashRouter>
      <NavigationBar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/about" element={<About />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  </>
  );
}

export default App;
