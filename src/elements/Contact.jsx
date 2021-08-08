import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import WhatsApp from "../../public/assets/images/icons/whatsapp.png";
import Gmail from "../../public/assets/images/icons/gmail.png";
import Locatie from "../../public/assets/images/icons/locatie.png";
import Facebook from "../../public/assets/images/icons/facebook.png";
import Instagram from "../../public/assets/images/icons/instagram.png";
import Arieka from "../../public/assets/images/logo/logo-dark.png";
import FooterTwo from "../component/footer/FooterTwo";
import Scrollspy from 'react-scrollspy';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
    constructor(props) {
        super(props)
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

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

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Contact</h2>
                                    <p>Voor het aanvragen van een offerte, of andere vragen kunt u contact met ons opnemen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">

                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <a href="tel:+31 641827839">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <img src={WhatsApp} alt="" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">WhatsApp en Bellen</h4>
                                            <p>+31 641827839</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <a href="https://www.facebook.com/arieka.arieka.10" target="_blank">
                                    <div className="rn-address">
                                        <div className="icon" style={{ border: "none" }}>
                                            <img src={Facebook} alt="" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Facebook</h4>
                                            <p>facebook.com/arieka</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* End Single Address  */}

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <a href="https://www.instagram.com/meubelstoffeerderij_arieka/" target="_blank">
                                    <div className="rn-address">
                                        <div className="icon" style={{ border: "none" }}>
                                            <img style={{ maxWidth: "82%" }} src={Instagram} alt="" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Instagram</h4>
                                            <p>instagram.com/arieka</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <a href="mailto:ariekameubels@gmail.com ">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <img style={{ maxWidth: "82%" }} src={Gmail} alt="" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Email</h4>
                                            <p>ariekameubels@gmail.com </p>
                                            {/* <p><a href="mailto:info@arieka.nl">info@arieka.nl (tijdelijk inactief)</a></p> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* End Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <a href="https://www.arieka.nl">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <img src={Arieka} alt="" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Arieka website</h4>
                                            <p>www.arieka.nl</p>
                                            {/* <p><a href="mailto:info@arieka.nl">info@arieka.nl (tijdelijk inactief)</a></p> */}
                                        </div>
                                    </div>
                                </a >
                            </div>
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <a href="https://goo.gl/maps/hgPE8xdeY6X2mghc7" target="_blank">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <img style={{ maxWidth: "50%" }} src={Locatie} alt="" />
                                        </div>

                                        <div className="inner">
                                            <h4 className="title">Locatie</h4>
                                            <p>Schipholweg 955  <br />2143CE Boesingheliede </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* End Single Address  */}
                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                {/* <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            bootstrapURLKeys={{key:'AIzaSyBGzki-zWXDYlJlXiMI4AWnWzAoCEzeCZI'}}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div> */}
                {/* End Contact Map  */}


                {/* Start Brand Area */}
                {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area */}
                <FooterTwo />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* <Footer /> */}

            </React.Fragment>
        )
    }
}
export default Contact