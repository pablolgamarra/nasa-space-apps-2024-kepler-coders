import React from 'react';
import '../styles/landingStyles.css';
import NavBar from './Navbar';

const LandingPage: React.FC = () => {
	return (
		<div>
			<NavBar />
			{/* Hero Section */}
			<section className='hero'>
				<div className='container'>
					<h1>Terra Connections</h1>
					<p>
						Educando sobre el cambio climático con datos reales y
						lecciones interactivas para un futuro sostenible.
					</p>
					<a
						href='#features'
						className='btn-primary'
					>
						Explora la plataforma
					</a>
				</div>
			</section>

			{/* Features Section */}
			<section
				id='features'
				className='features'
			>
				<div className='container'>
					<h2>¿Qué ofrece Terra Connections?</h2>
					<div className='feature-grid'>
						<div className='feature-item'>
							<h3>Recursos Educativos</h3>
							<p>
								Accede a planes de lecciones y actividades
								diseñadas para estudiantes de secundaria,
								basadas en datos reales de la NASA.
							</p>
						</div>
						<div className='feature-item'>
							<h3>Simulaciones Interactivas</h3>
							<p>
								Experimenta simulaciones visuales que muestran
								los efectos del cambio climático en tiempo real
								y cómo podemos combatirlo.
							</p>
						</div>
						<div className='feature-item'>
							<h3>Materiales Visuales</h3>
							<p>
								Utiliza imágenes actuales e históricas extraídas
								de la plataforma NASA Earthdata Worldview para
								entender mejor el cambio climático.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call-to-action Section */}
			<section className='cta'>
				<div className='container'>
					<h2>Comienza hoy a transformar tu aula</h2>
					<p>
						Accede a recursos que convertirán tus clases en
						experiencias interactivas sobre el cambio climático y
						los sistemas interconectados de la Tierra.
					</p>
					<a
						href='#signup'
						className='btn-secondary'
					>
						Únete ahora
					</a>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='testimonials'>
				<div className='container'>
					<h2>Lo que dicen los educadores</h2>
					<div className='testimonial-grid'>
						<div className='testimonial-item'>
							<p>
								Terra Connections me permitió mostrar a mis
								estudiantes el impacto real del cambio climático
								usando datos científicos de la NASA. Es una
								herramienta increíblemente útil para
								involucrarlos en el tema.
							</p>
							<h4>Laura Gómez, Profesora de Ciencias</h4>
						</div>
						<div className='testimonial-item'>
							<p>
								Nunca había visto a mis alumnos tan interesados
								en las clases sobre el medio ambiente. Las
								simulaciones interactivas capturaron
								completamente su atención.
							</p>
							<h4>Carlos Medina, Profesor de Geografía</h4>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<footer className='footer'>
				<div className='container'>
					<p>
						© 2024 Terra Connections. Todos los derechos reservados.
					</p>
					<p>Síguenos en nuestras redes sociales</p>
					{/* Social Media Icons could go here */}
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
