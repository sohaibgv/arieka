import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from "react-icons/fi";


class Header extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render() {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color = 'default-color' } = this.props;
        let logoUrl;
        if (logo === 'light') {
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Arieka" style={{ height: '90px', width: 'auto' }} />;
        } else if (logo === 'dark') {
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Arieka" style={{ height: '90px', width: 'auto' }} />;
        } else if (logo === 'symbol-dark') {
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Arieka" style={{ height: '90px', width: 'auto' }} />;
        } else if (logo === 'all-dark') {
            logoUrl = <img src="/assets/images/logo/logo-all-dark.png" alt="Arieka" style={{ height: '90px', width: 'auto' }} />;
        } else if (logo === 'symbol-light') {
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Arieka" style={{ height: '90px', width: 'auto' }} />;
        } else {
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Arieka" style={{ height: '90px', width: 'auto' }} />;
        }

        return (
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/">Terug naar de homepagina</Link>
                                    {/* <ul className="submenu">
                                        <li><Link to="/main-demo">Main Demo</Link></li>
                                        <li><Link to="/dark-main-demo">Main Demo Dark</Link></li>
                                        <li><Link to="/creative-agency">Creative Agency</Link></li>
                                        <li><Link to="/creative-landing">Creative One Page</Link></li>
                                        <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                        <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link to="/portfolio-landing">Portfolio One Page</Link></li>
                                        <li><Link to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                        <li><Link to="/digital-agency">Digital Agency</Link></li>
                                        <li><Link to="/startup">Startup</Link></li>
                                        <li><Link to="/paralax">Paralax</Link></li>
                                        <li><Link to="/portfolio-home">Minimal Portfolio</Link></li>
                                        <li><Link to="/business">Business</Link></li>
                                        <li><Link to="/home-particles">Home Particles</Link></li>
                                        <li><Link to="/studio-agency">Studio Agency</Link></li>
                                        <li><Link to="/designer-portfolio">Designer Portfolio</Link></li>
                                    </ul> */}
                                </li>
                            </ul>
                        </nav>
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
        )
    }
}
export default Header;