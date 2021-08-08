import React, { Component } from 'react';
import Header from "../component/header/HeaderFour";
import ScrollToTop from 'react-scroll-up';
import Footer from "../component/footer/FooterTwo";
import Scrollspy from 'react-scrollspy';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

class error404 extends Component {

    render() {
        return (
            <>
                <Helmet pageTitle="Arieka Meubelstoffeerderij" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images" />
                                    <img className="logo-2" src="/assets/images/logo/logo-dark.png" alt="Logo Images" />
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home', 'service', 'getstart', 'about', 'services', 'portfolio']} currentClassName="is-current" offset={-200}>
                                    <li><a href="/#home">Home</a></li>
                                    <li><a href="/#service">Service</a></li>
                                    <li><a href="/#getstart">Starten</a></li>
                                    <li><a href="/#about">Over ons</a></li>
                                    <li><a href="/#services">Service details</a></li>
                                    <li><a href="/#uitgelicht">Uitgelicht</a></li>
                                    <li><a href="/gallery">Galerij</a></li>
                                    <li><a href="/service-details/stofferingen">Stofferingen</a></li>
                                    <li><a href="/service-details/banken">Banken</a></li>
                                    <li><a href="/service-details/gordijnen">Gordijnen</a></li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="rn-btn" href="/contact">
                                    <span>Offerte aanvragen</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">Page not found</h3>
                                    <span>The page you were looking for could not be found.</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </>
        )
    }
}
export default error404;
