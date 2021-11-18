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
        let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
  
  
        if(event.srcElement.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            jQuery(".menuA").css({"background-color":"rgba(255,255,255)",position:"fixed"})
            this.setState({color:"green"});
          }
             else{  
               jQuery(".menuA").css({"background-color":"transparent",position:"sticky"})
               this.setState({color:"#75B8AD"});
    }
}
    render(){
    return(
    <div id="Scroll" className= {`header-wrap${this.state.isPositionFixed ? ' fixed' : ""}`} style={{backgroundColor:"transparent"}} onScroll = {this.handleScroll} >
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
        <div className="headimg">
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

