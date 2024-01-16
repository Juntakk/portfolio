import { useEffect } from 'react'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'particles.js';
import './header.css'


const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

        // Configure particles.js
        window.particlesJS('particles-js', {
            particles: {
                number: { value: 122, density: { enable: true, value_area: 800 } },
                color: { value: '#bf7404' },
                shape: {
                    type: 'circle',
                    stroke: { width: 0, color: '#000000' },
                    polygon: { nb_sides: 3 },
                },
                opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
            },
            retina_detect: true,
        });
    }, []);

    return (
        <header id="header">
            <div id="particles-js" className="particles__container"></div>
            <div className="container header__container">
                <h1 data-aos="fade-up">Nicolas Habashi Gauthier</h1>
                <p data-aos="fade-up">
                    "Immerse yourself in your work, fall in love with it, and dedicate your life to mastering your skill. That's the secret of success."
                    <br /><br /> - Jiro Ono, "Jiro Dreams of Sushi"                </p>
                <div className="header__cta" data-aos="fade-up">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header__socials">
                    {
                        data.map(item => (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">{item.icon}</span>
                            </a>
                        ))
                    }
                </div>           </div>
        </header>
    );
};

export default Header