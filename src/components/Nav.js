import logo from '../images/zmh-logo.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Nav() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
		setNavbarOpen(!navbarOpen);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};
	return (
		<nav className='navbar'>
			<Link className='navbar-brand' to='/'>
				<img className='app-logo' src={logo} alt='zane magnetic healing' />
				<h1>Zane's Magnetic Healing</h1>
			</Link>
			<ul className='nav_links'>
				<Link to='/' onClick={() => closeMenu()}>
					<li className='nav_link'>Home</li>
				</Link>
				<Link to='/about' onClick={() => closeMenu()}>
					<li className='nav_link'>About</li>
				</Link>
				<Link to='/contact' onClick={() => closeMenu()}>
					<li className='nav_link'>Contact</li>
				</Link>
			</ul>
			<div className='mobile_menu' onClick={() => handleToggle()}>
				<div className='menu-bars bar'></div>
				<div className='menu-bars bar'></div>
				<div className='menu-bars bar'></div>
			</div>
			<div className={`mobile-links ${navbarOpen ? ' showMenu' : ''}`}>
				<Link to='/' onClick={() => closeMenu()}>
					<span className='mobile_link'>Home</span>
				</Link>
				<Link to='/about' onClick={() => closeMenu()}>
					<span className='mobile_link'>About</span>
				</Link>
				<Link to='/contact' onClick={() => closeMenu()}>
					<span className='mobile_link'>Contact</span>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
