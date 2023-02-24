import React from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
const Home = () =>
{
    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    lobodan
                    <br />
                    web developer
                </h1>
                <h2>
                    Frontend Developer / Backend Developer / DevOps Operator
                </h2>
            </div>
        </div>
    )
}

export default Home