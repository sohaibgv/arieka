import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Scrollspy from 'react-scrollspy';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

class ServiceDetails extends Component {
    constructor(props) {
        super(props)
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
        this.props = props;
        console.log(this.props.title);
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    render() {

        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

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
                <div className="rn-page-title-area pt--100 pb--100 bg_image bg_image--5" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{this.props.title}</h2>
                                    <p style={{ fontSize: "30px" }}>Onze werkwijze</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="details p-3 mt_md--30 mt_sm--30">

                                                {this.props.details ? <><h4 className="title">Service details</h4><p>{this.props.details}</p></> : null}
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    {/* <Carousel>
                                                        {this.props.fotos?.map((value, index) => (
                                                            <div className="col-lg-4" key={index}>
                                                                    <img src={value} alt="Portfolio Images" />
                                                                    <p>test</p>
                                                            </div>
                                                        ))}
                                                    </Carousel> */}
                                                    <img className="w-100" src={`/assets/images/bg/${this.props.img}`} alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">

                                                    <h4 className="title">Ons proces</h4>
                                                    <ul className="liststyle">
                                                        {this.props.steps ? this.props.steps.map(elem => {
                                                            return <li>{elem}</li>
                                                        }) : null}
                                                    </ul>
                                                </div>
                                                <div className="header-btn ptb--40">
                                                    <a className="rn-btn" href="/contact">
                                                        <span>Offerte aanvragen</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        {/* <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                    <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images" />
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({ isOpen: false })} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;