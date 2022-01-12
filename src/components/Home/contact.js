import phone from './../../assests/images/phone.png';
import map from './../../assests/images/Maps.png';
import mail from './../../assests/images/Mail.png';
import "../../assests/styles/Home/contact.css"
import React, { Component } from 'react';
import { MapContainer } from './../About/Googlemap';


class contact extends Component{
    render(){
        return(
            <div className="App">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                  <div className="contact-header"><h1>Contact Us</h1></div>
                  <div><p className="contact-head-desc">We have offices everywhere</p></div>
                  <div><div className="contact-input-group">
                  <button type="submit" className="contact-searchicon"><i class="fa fa-search"></i></button>
              <input type="search" className="contact-form-control contact-rounded" placeholder="Enter your location" aria-label="Search"
              aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary contact-search">search</button>
            </div>
            </div>
            <div><h3 className="contact-title3">OUR HEAD OFFICE</h3></div>

              <div className="contact-row">
              <div className="contact-column">
                <div className="contact-card">
                  <div><img src={phone} alt="phone"/></div>
                  <p className="contact-desc">+91 1686 264880</p>
                </div>
              </div>

              <div className="contact-column">
                <div className="contact-card">
                <div><img src={map} alt="map"/></div>
                  <p className="contact-desc">Dharamgarh Bohli Road 
                                          Safidon, Dist. Jind
                                          Haryana - 126112
                                          India</p>
                </div>
              </div>
              
              <div className="contact-column">
                <div className="contact-card">
                <div><img src={mail} alt="mail"/></div>
                  <p className="contact-desc">info@skylarkhatcheries.com</p>
                </div>
              </div>
              </div>
                  <div>
                  { <MapContainer/>}                  
                  </div>
                </div>



            )
    }
}

export default contact;