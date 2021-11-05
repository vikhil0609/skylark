import React , {Component} from "react";
import "../../assests/styles/Home/contact.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { InputGroup , FormControl,Button } from "react-bootstrap";
import call from "../../assests/images/call.png"
import Location from "../../assests/images/location.png"
import Email from "../../assests/images/email.png"
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import Logo from "../../assests/images/Logo.png"
import Map from "./maps.js";

class contact extends Component{
    render(){
        return(
            <div className="contact-home">
                <div className="contact-heading">
                    <div>
                        <h1 id="contact-head">Contact Us</h1>
                        <h5 id="contact-subhead">We have our offices Everywhere</h5>
                    </div>
                </div>
                <div className="search-box">
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Enter your location"
                aria-label="Enter your location"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Search
                </Button>
            </InputGroup>
            </div>
            <div className="maps">
                <Map />
            </div>
            <div className="our-offices">
                <h1 style={{textAlign:"center"}}>
                    OUR HEAD OFFICES
                </h1>
                <div className="details">
                    <div id="call-log">
                        <img src={call} />
                        <div>
                            +91 1686 264880
                        </div>
                    </div>
                    <div id="location">
                        <img src={Location} />
                        <div>
                            Dharamgarh Bohil ROad
                            Safidon, Dist. JInd 
                            Haryana - 126112
                            India

                        </div>
                    </div>
                    <div id="email">
                        <img src={Email} />
                        <div>
                            info@skylarkhatcheries.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-us">
                <div  id="about_us">
                    <img src={Logo} />
                    <div>
                        Skylark Feed is wholesome and nutritional
                        feed, most preffered meal in the Indian
                        polutyr market today. The various types of
                        feed manufactured by us are well-Blanaced
                        to fulfill the different requirements
                        of different birds
                    </div>
                </div>
                <div id="links">
                        <h3>UseFul Links</h3>
                        <div className="sub">Lorem ipsum</div>
                        <div className="sub">Lorem ipsum</div>
                        <div className="sub">Lorem ipsum</div>
                        <div className="sub">Lorem ipsum</div>


                        
                    </div>
                    <div id="contact">
                        <h3>Contact US</h3>
                        <div className="sub">Lorem ipsum</div>
                        <div className="sub">Lorem ipsum</div>
                        <div className="sub">Lorem ipsum</div>
                        <div className="sub">Lorem ipsum</div>
                    </div>
                    <div className="footer">
                    <i style={{fontSize:"24px"}} className="fa">&#xf16a;</i>
                    <i style={{fontSize:"24px"}} className="fa">&#xf09a;</i>
                    <i style={{fontSize:"24px"}} class="fa">&#xf0e1;</i>
                    </div>
            </div>
            </div>
            )
    }
}

export default contact;