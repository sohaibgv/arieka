import React, { Component } from "react";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

class ContactTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Neem contact op.</h2>
                                <p className="description">Wij zullen u een e-mail terug sturen op het vernoemde e-mail adres.</p>
                            </div>
                            <div className="form-wrapper">
                                <form id="form-contact-email" onSubmit={(event) => {
                                    event.preventDefault();
                                    emailjs.send('contact_service', 'template_9ym4m1e', { subject: this.state.rnSubject, reply_to: this.state.rnEmail, from_name: this.state.rnName, to_name: 'Arieka meubelstoffeerderij', message: this.state.rnMessage }, 'user_xARK1Gued2X0hgRU68tru', '#form-contact-email')
                                        .then(function (response) {
                                            toast.success('Uw bericht is succesvol verzonden!', {
                                                position: "bottom-center",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                style: {
                                                    textAlign: 'center'
                                                },
                                                // onClose: 
                                            });

                                        }, function (err) {
                                            toast.error(err, {
                                                position: "bottom-center",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                style: {
                                                    textAlign: 'center'
                                                }
                                            });
                                        });
                                }}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e) => { this.setState({ rnName: e.target.value }); }}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e) => { this.setState({ rnEmail: e.target.value }); }}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e) => { this.setState({ rnSubject: e.target.value }); }}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e) => { this.setState({ rnMessage: e.target.value }); }}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/featured/featured-chair.jpg" alt="trydo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;