import Menu from './components/menu/menu'
import './App.css'
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import { useState } from 'react';

function App() {
 

  const [activeSection, setActiveSection] = useState("Home");

  const renderSection = () => {
      switch (activeSection) {
          case "Home":
              return <Home />;
          case "Skills":
              return <Skills />;
          case "Projects":
              return <Projects />;
          case "Contact":
              return <Contact />;
          default:
              return <Home />;
      }
  };
  

  return (
    <>
      <Menu setActiveSection={setActiveSection} />
      <main>
      {/* {renderSection()} */}
      </main>
    </>
  )
}

export default App
