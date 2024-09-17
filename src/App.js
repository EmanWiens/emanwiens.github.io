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
    <html>
      <head>
        <title>E. Wiens</title>
      </head>

      <body>
        <HashRouter>
          <NavigationBar />
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </HashRouter>
      </body>
    </html>
  </>
  );
}

export default App;
