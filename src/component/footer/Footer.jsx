import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
]
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Sta klaar</span>
                                        <h2 className="col-lg-10 plr_dec--15">Tijd om te starten</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Neem contact op</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Links</h4>
                                                <ul className="ft-link" style={{display: "flex"}}>
                                                    <div className="col-lg-6 plr_dec--15">
                                                        <li><a href="/">Home</a></li>
                                                        <li><a href="/service-details/stofferingen">Stofferingen</a></li>
                                                        <li><a href="/service-details/gordijnen">Gordijnen</a></li>
                                                    </div>
                                                    <div className="col-lg-6 plr_dec--15">
                                                        <li><a href="/service-details/banken">Banken</a></li>
                                                        <li><a href="/gallerij">Gallerij</a></li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Stuur ons een vraag</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:ariekameubels@gmail.com">ariekameubels@gmail.com</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {/* {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))} */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p><a href="https://www.sohaibezzahir.com/">Developed by Haib - IT Workshops &amp; Web-development</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;