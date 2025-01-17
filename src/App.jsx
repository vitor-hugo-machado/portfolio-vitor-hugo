import Menu from './components/menu/menu'
import './App.css'
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import { useState, useEffect } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.menu');
      if (menu && !menu.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector('main');
    const menu = document.querySelector('.menu');

    if (main && menu) {
      const handleClick = () => {
        menu.classList.remove('menu-large');
      };

      main.addEventListener('click', handleClick);

      return () => {
        main.removeEventListener('click', handleClick);
      };
    }
  }, []);


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
        {renderSection()}
        <h6>Desenvolvido por Vitor Hugo 👨‍💻</h6>
      </main>
      
    </>
  )
}

export default App
