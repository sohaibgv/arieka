import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { SRLWrapper } from "simple-react-lightbox";

let N = 16, Z = 59, Y = 3, i = 1, Tabs1 = Array(N - 1), Tabs2 = Array(Z - 1), Tabs3 = Array(Y - 1);

while (i <= N) Tabs1[i++] = i;
i = 1;
while (i <= Z) Tabs2[i++] = i;
i = 1;
while (i <= Y) Tabs3[i++] = i;
let couches = [], stofferingen = [], gordijnen = [];
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
        };
    }
    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        const { tab1, tab2, tab3, isOpen1, isOpen2, isOpen3 } = this.state;
        console.log(Tabs1);
        couches = this.importAll(require.context('../../public/assets/images/products/banken/', false, /\.(png|jpe?g|svg)$/));
        stofferingen = this.importAll(require.context('../../public/assets/images/products/stofferingen/', false, /\.(png|jpe?g|svg)$/));
        gordijnen = this.importAll(require.context('../../public/assets/images/products/gordijnen/', false, /\.(png|jpe?g|svg)$/));
        console.log(couches);
        return (
            <div>

                <PageHelmet pageTitle='Gallerij' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Gallery'} />
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">

                    {/* Start Portfolio Area  */}
                    <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
                        <div className="container">
                            <div className="row">
                                <Tabs forceRenderTabPanel={false}>
                                    <TabList className="tab-style--1">
                                        <Tab>Marokkaanse banken</Tab>
                                        <Tab>Stofferingen</Tab>
                                        <Tab>Gordijnen</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <SRLWrapper>
                                            <div style={{ display: "flex", flexWrap: "wrap", marginRight: "-15px", marginLeft: "-15px" }}>
                                                {couches.map((value, index) => (
                                                    <div className="col-lg-4" key={index}>
                                                        <div className="item-portfolio-static">
                                                            <a href={value}>
                                                                <img src={value} alt="Portfolio Images" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}</div>
                                        </SRLWrapper>

                                    </TabPanel>
                                    <TabPanel >
                                        <SRLWrapper>
                                            <div style={{ display: "flex", flexWrap: "wrap", marginRight: "-15px", marginLeft: "-15px" }}>
                                                {stofferingen.map((value, index) => (
                                                    <div className="col-lg-4" key={index}>
                                                        <div className="item-portfolio-static">
                                                            <a href={value}>
                                                                <img src={value} alt="Portfolio Images" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}</div>
                                        </SRLWrapper>
                                    </TabPanel>
                                     <TabPanel >
                                        <SRLWrapper>
                                            <div style={{ display: "flex", flexWrap: "wrap", marginRight: "-15px", marginLeft: "-15px" }}>
                                                {gordijnen.map((value, index) => (
                                                    <div className="col-lg-4" key={index}>
                                                        <div className="item-portfolio-static">
                                                            <a href={value}>
                                                                <img src={value} alt="Portfolio Images" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}</div>
                                        </SRLWrapper>
                                    </TabPanel>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area  */}

                    {/* Start Portfolio Area  */}
                    {/* <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
                    <div className="container plr--10">
                        <div className="row row--5">
                            {PortfolioList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="portfolio-style--3">
                                        <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.images}.jpg`} alt="Portfolio Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="portfoliotype">{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-btn">
                                                <a className="rn-btn text-white" href="/portfolio-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                    {/* End Portfolio Area  */}

                </main>
                {/* End Page Wrapper  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* Start Footer Area  */}
                <Footer />
                {/* End Footer Area  */}
            </div >
        )
    }
}


export default Gallery;