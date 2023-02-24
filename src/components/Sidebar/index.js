import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () =>
{
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img className='' src={LogoS} alt='Logo S' />
                <img className='sub-logo' src={LogoSubtitle} alt='Logo Subtitle' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/about' className='about-link'>
                    <FontAwesomeIcon icon={faUser} color='4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color='4d4d4e' />
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar