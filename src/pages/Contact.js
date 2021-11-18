import React, { Component} from 'react';
import NavBar from "../components/Navbar"
import Contact from '../components/Home/contact';


class ContactPage extends Component{
    render(){
        return (
            <div>
                <NavBar color={"#75B8AD"} isimage={false} />
                <Contact />
            </div>
        );
    }
}

export default  ContactPage;