import React from 'react';
import './resources/Footer.css';
import {Link} from 'react-router-dom';
import { Button } from './Button';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the 2WIN-HACKATHON newsletter to receive our Updated news
                </p>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                        2WIN <i class="fas fa-fighter-jet"/>
                        </Link>
                    </div>&nbsp;&nbsp;
                    <small className="website-rights">2WIN&copy; 2021</small> &nbsp;&nbsp;
                    <button> Yash Raj 
                        Banka  </button> &nbsp;
                    <div className="social-icons">
                        <a className="social-icon-link facebook"
                            href='https://www.facebook.com/Vkmandal24/'
                            target='_blank'
                            arial-label='Facebook'
                            rel="noreferrer"
                            >
                                <i className="fab fa-facebook-f"></i>
                        </a>
                        <a 
                            className="social-icon-link instagram"
                            href='https://www.instagram.com/_ethical_psycho/'
                            target='_blank'
                            arial-label='Instagram'
                            rel="noreferrer"
                            >
                            <i className="fab fa-instagram"/>
                        </a>
                        <Link 
                            className="social-icon-link twitter"
                            href='https://www.twitter.com'
                            target='_blank'
                            arial-label='Twitter'
                            rel="noreferrer"
                            >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <a 
                            className="social-icon-link Linkedin"
                            href='https://www.linkedin.com/in/vishal-mandal-b8b126154/'
                            target='_blank'
                            arial-label='Linkedin'
                            rel="noreferrer"
                            >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a 
                            className="social-icon-link youtube"
                            href='https://www.youtube.com/channel/UCUEmQexeCaEAtozjB8RShvQ/featured'
                            target='_blank'
                            arial-label='Youtube'
                            rel="noreferrer"
                            >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    &nbsp;&nbsp;
                    <button>  VishalKumar
                         Mandal  </button> &nbsp;
                    <div className="social-icons">
                        <a className="social-icon-link facebook"
                            href='https://www.facebook.com/Vkmandal24/'
                            target='_blank'
                            arial-label='Facebook'
                            rel="noreferrer"
                            >
                                <i className="fab fa-facebook-f"></i>
                        </a>
                        <a 
                            className="social-icon-link instagram"
                            href='https://www.instagram.com/_ethical_psycho/'
                            target='_blank'
                            arial-label='Instagram'
                            rel="noreferrer"
                            >
                            <i className="fab fa-instagram"/>
                        </a>
                        <Link 
                            className="social-icon-link twitter"
                            href='https://www.twitter.com'
                            target='_blank'
                            arial-label='Twitter'
                            rel="noreferrer"
                            >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <a 
                            className="social-icon-link Linkedin"
                            href='https://www.linkedin.com/in/vishal-mandal-b8b126154/'
                            target='_blank'
                            arial-label='Linkedin'
                            rel="noreferrer"
                            >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a 
                            className="social-icon-link youtube"
                            href='https://www.youtube.com/channel/UCUEmQexeCaEAtozjB8RShvQ/featured'
                            target='_blank'
                            arial-label='Youtube'
                            rel="noreferrer"
                            >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
