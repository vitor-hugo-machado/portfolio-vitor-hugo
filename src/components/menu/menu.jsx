import './menu.css'
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFileAlt, faPhone, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from '../social-media/social-media';

function Menu() {
    useEffect(() => {
        const arrow = document.getElementById('arrow'); 
        const menu = document.querySelector('.menu'); 

        const handleMenuToggle = () => {
            if (menu.classList.contains('big-menu')) {
                menu.classList.remove('big-menu');
            } else {
                menu.classList.add('big-menu');
            }
        };

        if (arrow) {
            arrow.addEventListener('click', handleMenuToggle);
        }

        // Cleanup: Remove o evento ao desmontar o componente
        return () => {
            if (arrow) {
                arrow.removeEventListener('click', handleMenuToggle);
            }
        };
    }, []);

    return (
        <div className='menu'>
            <div className='logo'>
                <h1 className='text-logo'>VITOR HUGO</h1>
                <img src='/images/asterisco.png' alt='logo' width={40} />
            </div>
            <ul>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='menu-icon' icon={faHouse} />
                        <h3 className='menu-item-name '>HOME</h3>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='menu-icon' icon={faUser} />
                        <h3 className='menu-item-name'>SKILLS</h3>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='menu-icon' icon={faFileAlt} />
                        <h3 className='menu-item-name'>PROJETOS</h3>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon className='menu-icon' icon={faPhone} />
                        <h3 className='menu-item-name'>CONTATO</h3>
                    </a>
                </li>
            </ul>

            <div className='social-media-menu'>
                <SocialMedia />
            </div>
            <a href="#" id='arrow'><FontAwesomeIcon icon={faCaretRight} /></a>
            
        </div>
    )
}

export default Menu