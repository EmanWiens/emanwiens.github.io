import './App.css';
import { Route, Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import Homepage from './Homepage'
import Projects from './Projectspage'
import Guides from './Guidespage'
import About from './Aboutpage'
import NoPage from './NoPage'

import NavigationBar from './NavigationBar'

function App() {
  return (
  <>
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/guides" exact element={<Guides />} />
        <Route path="/about" exact element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  </>
  );
}

export default App;
