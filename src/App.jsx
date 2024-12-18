import Menu from './components/menu/menu'
import SocialMedia from './components/social-media/social-media'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretRight } from "@fortawesome/free-solid-svg-icons";
import './App.css'
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';

function App() {

  return (
    <>
      <Menu />
      <main>
        <Projects />
      </main>
    </>
  )
}

export default App
