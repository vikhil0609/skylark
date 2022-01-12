import React from "react";
import {NavLink,Router} from "react-router-dom";
import "../assests/styles/navbar.css"
import Logo from "../assests/images/Logo.png"
import jQuery from "jquery";
import Egg from "../assests/images/egg.png"

class Navbar extends React.Component{

    constructor(props){
        super(props); 
        this.state = {
            active :"home" ,
            isPositionFixed: false,
            isImage : true,
            color:props.color,

        }
        this.handleScroll = this.handleScroll.bind(this);
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

      handleScroll(event) {
    //     let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);
  
  
    //     if(event.srcElement.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    //         jQuery(".menuA").css({"background-color":"rgba(255,255,255)",position:"fixed"})
    //         this.setState({color:"green"});
    //       }
    //          else{  
    //            jQuery(".menuA").css({"background-color":"transparent",position:"sticky"})
    //            this.setState({color:"#75B8AD"});
    // }
    // window.onscroll = function() {myFunction()};

    //     var navbar = document.getElementById("navbar");
    //     var sticky = navbar.offsetTop;

    //     function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    //     }
}

    render(){
        
    return(


        <nav className="navbar navbar-inverse navbar-fixed-top sticky navbar-expand-lg">
    <a className="navbar-brand d-lg-none" href="#"><img className="Nav-logo" src={Logo}  /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler7">
        <ul className="navbar-nav left-side" >
            <li className="nav-item">
                <a className="nav-link text-left" href="/">HOME</a>
            </li>
            <li className="nav-item nav-left">
                <a className="nav-link" href="/products">PRODUCTS</a>
            </li>

            <li className="nav-item nav-left">
                <a className="nav-link" href="/gallery">GALLERY</a>
            </li>
        </ul>
        <ul className="navbar-nav mx-auto">
            <a className="d-none d-lg-block" href="#"><img className="Nav-logo" src={Logo} /></a>
        </ul>
        <ul className="navbar-nav right-side">    
            <li className="nav-item">
                <a className="nav-link" href="/quality">QUALITY</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/career">CAREER</a>
            </li>

            <li className="nav-item nav-left">
                <a className="nav-link" href="/contact">CONTACT</a>
            </li>
        </ul>
    </div>
</nav>
        )

}
}
export default Navbar;

