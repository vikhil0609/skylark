import React , {Component} from "react";
import "../../assests/styles/Home/contact.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { InputGroup , FormControl,Button } from "react-bootstrap";
import call from "../../assests/images/PhoneNew.png"
import Location from "../../assests/images/Maps.png"
import Email from "../../assests/images/Mail.png"
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import Maps from "./maps.js";
import Footer from "../Footer"

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
                <Maps />
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
                            Dharamgarh Bohil Road<br/>
                            Safidon, Dist. JInd <br/>
                            Haryana - 126112<br/>
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
            <div>
                <Footer color={"#EFF9F8"} />
            </div>
            </div>
            )
    }
}

export default contact;