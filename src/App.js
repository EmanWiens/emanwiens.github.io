import { Route, Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import Homepage from './Homepage'
import Projects from './Projectspage'
import Guides from './Guidespage'
import About from './Aboutpage'
import Plants from './Plantspage'
import NoPage from './NoPage'

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
