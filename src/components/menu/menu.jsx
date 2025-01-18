import './menu.css'
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFileAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import SocialMedia from '../social-media/social-media';

function Menu({ setActiveSection }) {

    useEffect(() => {
        const hamburger = document.getElementById('hamburger');
        const menu = document.querySelector('.menu');
    
        const handleMenuToggle = () => {
            menu.classList.toggle('menu-large');
            hamburger.classList.toggle('active'); 
        };
    
        if (hamburger) {
            hamburger.addEventListener('click', handleMenuToggle);
        }
    
        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', handleMenuToggle);
            }
        };
    }, []);

    return (
        <div className='menu'>
            <div className='logo'>
                <h1 className='text-logo'>VITOR HUGO</h1>
                <img id='asterisco-logo' src='/images/asterisco.png' alt='logo' width={40} />
            </div>
            <div className="hamburger" id="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </div>
            <ul>
                <li>
                    <a href='#' onClick={() => setActiveSection("Home")}>
                        <FontAwesomeIcon className='menu-icon' icon={faHouse} />
                        <h3 className='menu-item-name '>HOME</h3>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={() => setActiveSection("Skills")}>
                        <FontAwesomeIcon className='menu-icon' icon={faUser} />
                        <h3 className='menu-item-name'>SKILLS</h3>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={() => setActiveSection("Projects")}>
                        <FontAwesomeIcon className='menu-icon' icon={faFileAlt} />
                        <h3 className='menu-item-name'>PROJETOS</h3>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={() => setActiveSection("Contact")}>
                        <FontAwesomeIcon className='menu-icon' icon={faPhone} />
                        <h3 className='menu-item-name'>CONTATO</h3>
                    </a>
                </li>
            </ul>
            <div className='social-media-menu'>
                <SocialMedia />
            </div>
           
        </div>
    )}

export default Menu