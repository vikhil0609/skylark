import React, { Component} from "react";
import NavBar from "../components/Navbar"
import Home from "../components/Home/Home"
import Business from "../components/Home/Business";
import Parivar from "../components/Home/parivar";
import Sustainable from "../components/Home/sustainable";
import Footer from "../components/Footer";
import Director from "../components/Home/director";
import Global from "../components/Home/global";

class HomePage extends Component {
    render(){
        return(
        <div>
            <div className="home">
            <NavBar color={"white"} isimage={false} />
            <Home />
            </div>
            <Business />
            <Parivar />
            <Sustainable />
            <Global />
            <Director />
            <Footer />
        </div>
        );
    }
}

export default HomePage;