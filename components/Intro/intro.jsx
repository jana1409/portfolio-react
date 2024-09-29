import React from 'react';
import './intro.css';
import bg from '../../src/assets/image.jpg';
import btnImg from '../../src/assets/hireme.png';
import resume from '../../src/assets/resume.pdf';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span><br />
                <span className="IntroName">A.R Janani Shri</span>
                <div className="intoText">Software Engineer</div>
                
                <div className="introContainer">
                    <div className="resume-container">
                        <a href={resume} className="download-button" download="resume.pdf">Download Resume</a>
                    </div>
                    
                    <div className="introPara">
                        I'm a passionate software engineering student with a strong foundation in coding,
                        <br /> problem-solving, and building innovative solutions.
                    </div>
                </div>

                <Link to="contact" smooth={true} duration={500}>
                    <button className='btn'>
                        <img src={btnImg} alt="Hire" className='btnImg' />
                        Hire me
                    </button>
                </Link>
            </div>

            <img src={bg} alt="profile" className="bg" />
        </section>
    );
}

export default Intro;
