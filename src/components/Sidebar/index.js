import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () =>
{
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='Logo S' />
            </Link>
        </div>
    )
}

export default Sidebar