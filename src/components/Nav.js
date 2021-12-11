import React from 'react';
import logo from '../images/zmh-logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav className='navbar'>
			<Link className='navbar-brand' to='/'>
				<img className='app-logo' src={logo} alt='zane magnetic healing' />
				<h1>Zane's Magnetic Healing</h1>
			</Link>
			<ul className='nav_links'>
				<Link to='/'>
					<li className='nav_link'>Home</li>
				</Link>
				<Link to='/about'>
					<li className='nav_link'>About</li>
				</Link>
				<Link to='/contact'>
					<li className='nav_link'>Contact</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
