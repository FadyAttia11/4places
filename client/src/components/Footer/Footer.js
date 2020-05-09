import React from 'react'
import './Footer.css'

const footer = props => (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-section about">
                <h2 className="logo-text">4movies</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, libero ad, maxime deleniti quod deserunt incidunt, repudiandae temporibus corporis omnis reprehenderit cupiditate illo. Esse culpa tempora doloremque, possimus voluptate aliquam!</p>
                <div className="contact">
                    <span><i className="fas fa-phone"></i>&nbsp; 0122-956-5721</span>
                    <span><i className="fas fa-envelope"></i>&nbsp; fadyattia11@gmail.com</span>
                </div>

                <div className="socials">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
            </div>
            
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <br />
                <ul>
                    <a href="#"><li>Events</li></a>
                    <a href="#"><li>Developers Team</li></a>
                    <a href="#"><li>All Movies</li></a>
                    <a href="#"><li>Gallery</li></a>
                    <a href="#"><li>Terms and Conditions</li></a>
                </ul>
            </div>

            <div className="footer-section contact-form">
                <h2>Contact US</h2>
                <br />
                <form action="index.html" method="post">
                    <input type="email" name="email" className="text-input contact-input" placeholder="Your E-mail" />
                    <textarea name="message" className="text-input contact-input" placeholder="Write Your Message.."></textarea>
                    <button type="submit">
                        <i className="fas fa-envlope"></i>
                        Send
                    </button>
                </form>
            </div>
        </div>

        <div className="footer-bottom">
            &copy; 4Movies Website | Designed by Fady Attia
        </div>
    </div>
)

export default footer