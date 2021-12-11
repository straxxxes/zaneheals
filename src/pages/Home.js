import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<React.Fragment>
			<div className='scroll-arrow'></div>
			<section className='landing-area'>
				<div className='landing-text'>
					<h1>Providing medical relief for all.</h1>
					<p> Heal any disease and conquer any drug addiction with this magnetic healing therapy.</p>
					<p>This is a 90 day Magnetic Healing Process. Healing your Body, Mind and Soul.</p>
					<Link to='/contact'>
						<button className='cta-btn'>Get in touch</button>
					</Link>
				</div>
			</section>
			<section className='about-section'>
				<div className='about-section_text'>
					<div>
						<h1>What is it that I actually do?</h1>
						<p>
							With the special magnetic healing process combined with unique scientific formulas. I am
							able to cure or relieve any illnesses, diseases, drug addictions and even cancer.
						</p>
						<p>
							I specialize in reversing strokes and I do it by using the powerful science of the brain. I
							also provide aid in healing mental illnesses such as anxiety, depression, mood swings and
							psychosis, just to name a few.
						</p>
						<Link to='/about'>
							<button className='about-section_cta'>Read More</button>
						</Link>
					</div>
				</div>
			</section>
			<div className='contact-section'>
				<div className='contact-text'>
					<h1>Want to contact us?</h1>
					<p>
						<b>Email:</b> <a href='mailto:zane.hendricks@gmail.com'>zane.hendricks@gmail.com</a>
					</p>
					<p>
						<b>Mobile:</b> (+27)82 340 7512
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
