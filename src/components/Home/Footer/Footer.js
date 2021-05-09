import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5 text-white footer">
            <div className="row">
                <div className="col-md-4 justify-content-evenly text-center ">
                        <p> Emergency Dental Care </p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>

                </div>
                <div className="col-md-4 justify-content-evenly">
                    <div style={{ marginLeft: '130px' }}>
                        <p> Emergency Dental Care </p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Check Up</p>

                        <span className="me-3"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span>
                        <span className="me-3"><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></span>
                        <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
                    </div>

                </div>
                <div className="col-md-4 justify-content-evenly text-center">
                    <h4 className="mb-4 font-weight-bold">Contact Us</h4>
                    <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon><span>08-125789631</span><br></br>
                    <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon><span>doctorsportal@gmail.com</span>


                </div>
            </div>
        </div>
    );
};

export default Footer;
