import '../styles/landing.css';
import React from 'react';

const Landing: React.FC = () => {
	return (
		<div className={`landing-page`}>
			<h1>¡Nuestra aplicación está en desarrollo!</h1>
			<p>
				Estamos trabajando duro para ofrecerte una experiencia
				increíble. ¡Vuelve pronto para más novedades!
			</p>
			<div className='progress-bar'>
				<div className='progress'></div>
			</div>
			<footer>
				<p>© 2024 Tu Proyecto</p>
			</footer>
		</div>
	);
};

export default Landing;
