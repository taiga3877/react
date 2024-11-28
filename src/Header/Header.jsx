import React from 'react';
import './header.css'
import Logo from '../assets/maker-(mkr).png';

const Header = () => {
    return (
        <div className='head always'>
            <img src={Logo} alt="" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
    );
}

export default Header;
