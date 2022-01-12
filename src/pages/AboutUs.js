import React, { Component} from 'react';
import NavBar from "../components/Navbar"
import Head from '../components/About/head';
import Philosophy from '../components/About/philosophy';
import Team from '../components/About/team';
import Timeline from '../components/About/timeline';
import Award from '../components/About/award';
import Network from '../components/About/network';

import Footer from "../components/Footer"
class AboutUs extends Component{
    render(){
        return (
            <div>
                <NavBar color={"#75B8AD"} isimage={false} />
                <Head />
                <Philosophy />
                <Team />
                <Timeline />
                <Award />
                <Network />
                <Footer color={"#EFF9F8"} />
            </div>
        );
    }
}

export default  AboutUs;

