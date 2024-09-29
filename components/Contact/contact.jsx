import React from 'react';
import './contact.css';
import college from '../../src/assets/Img2.png';
import school from '../../src/assets/Img1.jpeg';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Education</h1>
                <p className="clientDesc">
                    Software Engineering Technology, Centennial College
                    Ongoing Advanced Diploma
                    <br />
                    High School: The New Indian School, Bahrain
                </p>

                <div className="clientImgs">
                    <img src={college} alt="College" className="clientImg" />
                    <img src={school} alt="School" className="clientImg" />
                </div>

            </div>
            <div id="contact">
                <h1 className="ContactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="text" className="email" placeholder='Your Email' />
                    <textarea className='msg' name="message"rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    {/* <div className="links">
                        <img src={} alt="" className="link" />
                        <img src={} alt="" className="link" />
                        <img src={} alt="" className="link" />
                        <img src={} alt="" className="link" />
                    </div> */}
                </form>

            </div>
        </section>
    );
}

export default Contact;
