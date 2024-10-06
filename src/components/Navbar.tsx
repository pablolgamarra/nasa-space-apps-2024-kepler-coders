import React from 'react';
import { Link } from 'react-scroll';
import '../styles/navBarStyles.css';

const NavBar: React.FC = () => {
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='logo'>
					<h1>Terra Connections</h1>
				</div>
				<ul className='nav-links'>
					<li>
						<Link
							to='hero'
							smooth={true}
							duration={500}
						>
							Inicio
						</Link>
					</li>
					<li>
						<Link
							to='features'
							smooth={true}
							duration={500}
						>
							Características
						</Link>
					</li>
					<li>
						<Link
							to='cta'
							smooth={true}
							duration={500}
						>
							Comenzar
						</Link>
					</li>
					<li>
						<Link
							to='testimonials'
							smooth={true}
							duration={500}
						>
							Testimonios
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
