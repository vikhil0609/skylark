import React from "react";
import "../assests/styles/Home/contact.css"
import Logo from "../assests/images/Logo.png"

class Footer extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            color:props.color
        }
        console.log(this.state.color)
      }
    render(){
    return(
        <div className="contact-home">
            <div className="contact-us" style={{backgroundColor:this.state.color}}>
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
                <div>
                <div className="footer">
                <i style={{fontSize:"24px"}} className="fa">&#xf16a;</i>
                <i style={{fontSize:"24px"}} className="fa">&#xf09a;</i>
                <i style={{fontSize:"24px"}} class="fa">&#xf0e1;</i>
                </div>
                </div>
        </div>
</div>

    );
}
}
export default Footer;