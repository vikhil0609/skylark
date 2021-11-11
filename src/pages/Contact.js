import React, { Component} from 'react';
import NavBar from "../components/Navbar";
import Contact from '../components/Home/contact';


class Contact extends Component{
    render(){
        return (
            <div>
            <NavBar color={"green"} isimage={true} />
            <Contact />
            </div> 
        );
    }
}

export default  Contact;