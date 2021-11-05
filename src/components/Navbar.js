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
            isImage : props.isimage,
            color:props.color
        }
      }
    render(){
    return(
    <div id="Scroll" className="header-wrap" style={{backgroundColor:"transparent"}} >
    <div className="header">
        
        <div className="menuA">
            <div className="nav-left">
            <NavLink id="navid" to="/" activeClassName="circle" style={{color:this.state.color}}>
                HOME
            </NavLink>
            <NavLink id="navid" to="/products" style={{color:this.state.color}}>
                PRODUCTS
            </NavLink>
            <NavLink id="navid" to="/gallery" style={{color:this.state.color}}>
                GALLERY
            </NavLink>
        </div>
        <div className={` ${this.state.isImage === true ? "headimg" : "imgnone"}`}>
            <img src={Logo} /></div>
        <div className="nav-right">
            <NavLink id="navid" to="/quality" style={{color:this.state.color}} >
                QUALITY
            </NavLink >
            <NavLink id="navid" to="career"   style={{color:this.state.color}}>
                CAREER
            </NavLink>

            <NavLink id="navid" to="/contact" style={{color:this.state.color}}>
                CONTACT
            </NavLink>
        </div>
        </div>
    </div>
    </div>
    )
}
}
export default Navbar;

