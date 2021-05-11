import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} </title>
                    <meta name="description" content="Arieka meubelstoffeerderij is gespecialiseerd in alle stofferingen. Stofferingen voor zowel moderne als klassieke meubels, boten, campers en caravans." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
