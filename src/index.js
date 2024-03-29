// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import Demo from './page-demo/Demo';
import MainDemo from './home/MainDemo';
import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency';
import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
import Business from './home/Business';
import StudioAgency from './home/StudioAgency';
import PortfolioLanding from './home/PortfolioLanding';
import CreativeLanding from './home/CreativeLanding';
import HomeParticles from './home/HomeParticles';
import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
import InteriorLanding from './home/Interior';
import CorporateBusiness from './home/CorporateBusiness';

// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import SimpleReactLightbox from 'simple-react-lightbox'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component {
    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Switch>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} /> */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo} />
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo} />
                    <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup} />
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax} />

                    <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency} />
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency} />
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio} />
                    <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency} />
                    <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding} />
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding} />
                    <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles} />
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding} />
                    <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} component={DesignerPortfolio} />
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio} /> */}

                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={InteriorLanding} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details/stofferingen`} >
                        <ServiceDetails title="Stofferingen" img="restored-chair.jpg" 
                            fotos={this.importAll(require.context('../public/assets/images/products/stofferingen/', false, /\.(png|jpe?g|svg)$/))}
                        details="Wij zijn gespecialiseerd in alle soorten (her)stofferingen. Zowel moderne als klassieke meubels,boten,campers en caravans. Zo hebben wij ook grote kennis van leerproducten. Tevens herstellen wij oude binnenwerken met koudschuim of veren. Rug- of heupklachten? Wij verzorgen gelijk een aanpassingen in de rug &amp; zitting. meubels krijgen een 2e leven en worden beter dan nieuw. Nadat u op de werkplaats bent langsgekomen krijgt u enkele dagen de tijd om een stof uit te kiezen."
                            steps={["Wij beginnen door het oude stof eraf te halen", "Vervolgens hervullen wij schuim waar nodig",
                                "Zodra het meubel er weer van binnen goed uitziet zullen wij de nieuwe stof erop zetten.",
                                "Duur is afhankelijk van het meubel en de hoeveelheid."]} />
                    </Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details/banken`} >
                        <ServiceDetails title="Marokkaanse banken" img="moroccan_couch.jpg"
                            details="Marokkaans Interieur heeft van oudsher een eigen, verfijnde en smaakvolle uitstraling. Interieur dat in eeuwen aan de hoven van sultans en viziers is ontwikkeld. Een afgewogen mix van kleuren, materialen en vormen creëert een aangename en rustgevende wereld die uw woning kan zijn. Wij bieden u hedendaags en modern interieur met een Koninklijke uitstraling."
                            steps={["Na het ontvangen van de afmetingen zitten we samen met de klant om de juiste productsoorten te bespreken.",
                                "Wij bespreken onderwerpen zoals het hout, de stof, aantal kussens, soort kussens, en stellen een eerlijke prijs op.",
                                "We geven een tijdsindicatie en bieden de mogelijkheid om de bank bij u in elkaar te komen zetten.",
                            ]} />
                    </Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details/gordijnen`} >
                        <ServiceDetails title="Gordijnen" img="curtain.jpg"
                            details="Je huis is de plek waar je tot rust komt na een drukke dag: je wilt je er thuis voelen. De kleuren van je interieur spelen daarbij een belangrijke rol. Met de kleur  van gordijnen leg je de basis voor je inrichting. Arieka heeft een ruime keuze aan dikke en dunnere gordijnstof. Omdat je je gordijnen op maat laat maken, bepaal jij de lengte en breedte van de gordijnen en de soort plooi. Met de gordijnstoffen van Arieka is één ding zeker: je krijgt goede kwaliteit voor de laagste prijs. Laat je gordijnen op maat maken."
                            steps={["Wij dienen de afmetingen van de ruimte voor de gordijnen te ontvangen.",
                                "Als u een afspraak met ons maakt kunnen we langs komen en dit voor u doen.",
                                "Nadat we de afmetingen hebben kiest u een stof en design uit.",
                                "Na de verwerking tot een gordijn kunnen we ook langs komen en deze voor u ophangen."]} />
                    </Route>

                    {/* <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness}/> */}


                    {/* Element Layot */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service} />
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails} />
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails} /> */}

                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />

                    {/* Blocks Elements  */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters} />
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial} />
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup} /> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery} />
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand} />
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar} />
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm} />
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap} />
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns} />
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable} /> */}



                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
                    <Route component={error404} />

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<SimpleReactLightbox><Root /></SimpleReactLightbox>, document.getElementById('root'));
serviceWorker.register();