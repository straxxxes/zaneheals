import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div>
			<div className='about-image'></div>
			<section className='about-page'>
				<p>
					WHO ELSE WANTS A SIMPLE SOLUTION TO CURE THEIR DRUG HABIT? ! if you answer " Yes " to the above
					question ,then read this entire message right now.... Now you can instantly solve your Drug
					Addiction, without spending months in REHAB CENTRES " ... At long last ! There is a Proven Formula
					to get your life Back on track.
				</p>
				<hr />
				<h1>What is it that I actually do?</h1>
				<p>
					With the Special Magnetic Healing Therapy combined with unique scientific formulas. I am able to
					cure or relieve any illnesses, diseases, drug addictions and even cancer.
				</p>
				<p>
					I specialize in reversing strokes and I do it by using the powerful science of the brain. I also
					provide aid in healing mental illnesses such as anxiety, depression, mood swings and psychosis, just
					to name a few.
				</p>
				<p>
					Also ,if anyone has any other health problems such as Diabetes or various heart ailments or even if
					they are addicted to various other drugs ,these people can be Healed too. I provide healing for any
					sickness, disease or addiction with the Special Magnetic Healing Therapy combined with unique
					scientific formulas which took years to test and develop.
				</p>
				<div className='special-lists'>
					<div className='special-list'>
						<h3>What are my specialties?</h3>
						<ul>
							<li>Incurable Diseases</li>
							<li>Arthritis </li>
							<li>Heart Ailments</li>
							<li>Reversal of Strokes</li>
							<li>Multiple Sclerosis</li>
							<li>Cancer </li>
							<li>Disabilities </li>
							<li>Drug Addictions </li>
						</ul>
					</div>
					<div className='drug-list'>
						<h3>Addictions that I Cure?</h3>
						<ul>
							<li>Weed </li>
							<li>Heroine </li>
							<li>Cocaine </li>
							<li>Mandrax </li>
							<li>Crystal Meth (Tik) </li>
							<li>Unga drug </li>
							<li>Ecstasy </li>
						</ul>
					</div>
				</div>
				<h2>Why does this work?</h2>
				<p>
					The magnetic healing process combined with unique scientific formulas works for everyone for many
					reasons:
					<b>
						<ul className='reason-list'>
							<li>No medications</li>
							<li>No injections</li>
							<li>No painkillers</li>
							<li>Quick an Easy</li>
						</ul>
						<ul className='reason-list'>
							<li>Painless Treatments</li>
							<li>100% proven results</li>
							<li>Zero risk factors</li>
						</ul>
					</b>
				</p>
				<p>
					This is hands down the most powerful method ever used to successfully treat and cure people from any
					illness, disease or addiction. <i>Certified testimonial can be shown upon request.</i>
				</p>
				<p>100% CONFIDENTIALITY GUARANTEED</p>
				<Link to='/contact'>
					<button className='contact-btn'>Get in touch today!</button>
				</Link>
			</section>
		</div>
	);
}

export default About;
