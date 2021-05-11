import React, { Component, Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot, portfolioSlick2 } from "../page-demo/script";


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'ARIEKA',
        description: 'Alles op maat gemaakt. Meubelstoffeerderij, meubels, kussens, gordijnen, en antieke meubel reparaties.',
        buttonText: 'Neem contact met ons op',
        buttonLink: '/contact'
    }
]

const PortfolioList2 = [
    {
        image: 'image-1',
        category: 'Bedden',
        title: 'Op maat gemaakte bedden',
        url: 'banken'
    },
    {
        image: 'image-8',
        category: 'Marokkaanse banken',
        title: 'Op maat gemaakte marokkaanse banken (Sedari)',
        url: 'banken'
    }
    , {
        image: 'image-3',
        category: 'Horeca',
        title: 'Op maat gemaakte horeca interieur',
        url: 'stofferingen'
    },
    {
        image: 'image-5',
        category: 'Moderne banken',
        title: 'Op maat gemaakte moderne banken',
        url: 'banken'
    },


    {
        image: 'image-6',
        category: 'Marokkaanse banken',
        title: 'Op maat gemaakte marokkaanse banken (Sedari)',
        url: 'banken'
    }, {
        image: 'image-2',
        category: 'Bedden',
        title: 'Op maat gemaakte bedden',
        url: 'stofferingen'
    },
    ,
    {
        image: 'image-7',
        category: 'Marokkaanse banken',
        title: 'Op maat gemaakte marokkaanse banken (Sedari)',
        url: 'banken'
    }, {
        image: 'image-4',
        category: 'Moderne banken',
        title: 'Op maat gemaakte moderne banken',
        url: 'banken'
    },

]


const starndardService = [
    {
        image: 'featured-chair',
        title: 'Stofferingen',
        description: 'Voor al onze stofferingen.',
        url: 'stofferingen',
    },
    {
        image: 'featured-couch',
        title: 'Marokkaanse banken',
        description: 'Een groot assortiment aan marokkaanse banken. ', url: 'banken',
    }, {
        image: 'featured-curtains',
        title: 'Gordijnen',
        description: 'Op maat gemaakte gordijnen naar uw wens.', url: 'gordijnen',
    }

]

const ServiceListOne = [
    {
        icon: "fabric-icon.svg",
        title: 'Stofferingen',
        description: 'Specialisatie in alle soorten (her)stofferingen.'
    },
    {
        icon: "box-icon.svg",
        title: 'Groot assortiment',
        description: 'Grote kennis van leerproducten en een groot assertiment aan leer, skai en stof.'
    },
    {
        icon: "hammer.svg",
        title: 'Meubel reparatie',
        description: 'Repartie voor moderne en antieke meubels.'
    }

]

class InteriorLanding extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader() { }
    render() {
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            } else {
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return (
            <Fragment>
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
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#getstart">Starten</a></li>
                                    <li><a href="#about">Over ons</a></li>
                                    <li><a href="#services">Service details</a></li>
                                    <li><a href="/gallery">Gallerij</a></li>
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

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency" id="home">
                    <div className="bg_image bg_image--29" data-black-overlay="4">
                        {SlideList.map((value, index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="feature-area">
                                    <span>Op maat gemaakte meubels en stoffeerderij</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8">Wij zijn gespecialiseerd in alle soorten (her)stofferingen. Zowel moderne als klassieke meubels, boten, campers, en caravans.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper mt--30">
                            {ServiceListOne.map((val, i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Call To Action Area  */}
                <div className="call-to-action-wrapper call-to-action bg_image bg_image--30 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80" id="getstart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="inner text-left">
                                    <span>Sta klaar</span>
                                    <h2>Tijd om te starten</h2>
                                    <a className="rn-button-style--2 mt--70 mt_sm--30 mt_md--30" href="/contact"><span>Offerte aanvragen</span></a>
                                    <a className="rn-button-style--2 rn-btn-dark mt--70 mt_sm--30 mt_md--30" href="/gallery"><span>Foto's bekijken</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Call To Action Area  */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Content Box  */}
                <div className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1" id="about">
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <div className="thumbnail">
                                <img src="/assets/images/featured/featured-01.jpg" alt="Featured Images" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30">
                            <div className="content">
                                <p className="subtitle"><span>Op maat gemaakte</span> meubels voor jouw interieur</p>
                                <h2 className="fontWeight500">Verzorg een passende stoffeerderij voor jouw huis en kantoor</h2>
                                <p>Meubels krijgen een tweede leven en worden beter dan nieuw. De klanten hebben de keuze om de werkplek te bezoeken of wij komen naar de klant toe.
                                 Bij de werkplek kunnen de meubels meegebracht worden en besproken worden wat zij willen. Als er geen vervoer mogelijk is, dan is een klant-bezoek een andere optie.</p>
                                <ul className="list-style mt--30">
                                    <li>Gespecialiseerd in alle soorten (her)stofferingen</li>
                                    <li>Stofferingen voor zowel moderne als klassieke meubels, boten, campers en caravans.</li>
                                    <li>Groot assortiment aan leer, skai en stof</li>
                                    <li>Grote kennis van leerproducten</li>
                                    <li>Bank vergrotingen en afkortingen</li>
                                    <li>Reparatie antieke en moderne meubels</li>
                                    <li>Op maat gemaakte gordijnen en boxsprings</li>
                                    <li>Herstellingen oude binnenwerken met koudschuim of veren</li>
                                    <li>Rug- of heupklachten? Wij verzorgen gelijk een aanpassingen in de rug &amp; zitting.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Content Box  */}

                {/* Start Team Area  */}
                {/* <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="section-title text-left mb--30">
                                        <h2>Meet Our Designer</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="4" />
                        </div>
                    </div>
                </div> */}
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                {/* <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div> */}
                {/* End Testimonial Area */}

                {/* Start Featured Service Area  */}
                <div className="rn-featured-service-area pt--90 pb--120 bg_color--5" id="services">
                    <div className="container">
                        <div className="row">

                            {/* Start Single Service  */}
                            <div className="col-lg-3 col-md-6 col-12 mt--30">
                                <div className="section-title">
                                    <h2 className="title">Services</h2>
                                    <p>Bekijk de verschillende uitgelichte onderdelen van ons bedrijf!</p>
                                    <div className="service-btn">
                                        <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Offerte aanvragen</span></a>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Service  */}

                            {/* Start Single Service  */}
                            <div className="col-lg-9">
                                <div className="row">
                                    {starndardService.map((value, index) => (
                                        <div className="col-lg-4 col-md-4 mt--30" key={index}>
                                            <div className="standard-service">
                                                <div className="thumbnai">
                                                    <img src={`/assets/images/featured/${value.image}.jpg`} alt="Corporate Images" className="standard-service-images" />
                                                </div>
                                                <div className="content">
                                                    <h3><a href={`/service-details/${value.url}`}>{value.title}</a></h3>
                                                    <p>{value.description}</p>
                                                    <a className="btn-transparent rn-btn-dark" href={`/service-details/${value.url}`}><span className="text">Lees meer</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            {/* End Single Service  */}

                        </div>
                    </div>
                </div>
                {/* End Featured Service Area  */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title text-left service-style--3 mb--30">
                                    <h2 className="title">Uitgelicht</h2>
                                    <p>Voor een tweede leven van uw meubilair kunt u bij ons zijn. Bekijk onze collectie van voorbeelden en neem contact op voor extra voorbeelden of een offerte.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                        <div className="portfolio-slick-activation mt--30 mt_sm--30">
                            <Slider {...portfolioSlick2}>
                                {PortfolioList2.map((value, index) => (
                                    <div className="portfolio portfolio-interior-design" key={index}>
                                        <div className="thumbnail-inner">
                                            <div className={`thumbnail ${value.image}`}></div>
                                            <div className={`bg-blr-image ${value.image}`}></div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4><a href={`/service-details/${value.url}`}>{value.title}</a></h4>
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" href={`/service-details/${value.url}`}>Meer...</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default InteriorLanding;