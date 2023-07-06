import React from 'react';
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <div className='hamburger-menu'><GiHamburgerMenu /></div>
            <div className='close-menu'>X</div>
            <h2 className='navbar-header'>Anime</h2>
            <ul className='navbar-section'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/blogs'}>Blogs</Link>
                </li>
                <li>
                    <Link to={'/news'}>News</Link>
                </li>
                <li>
                    <Link to={'/quiz'}>Quiz</Link>
                </li>
            </ul>
            <ul className='navbar-auth'>
                <li>
                    <i><BsFillPersonPlusFill /></i>
                    <Link to={'/auth/signup'}>Signup</Link>
                </li>
                <li>
                    <i><BsFillPersonFill /></i>
                    <Link to={'/auth/signin'}>Signin</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar