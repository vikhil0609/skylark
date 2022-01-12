import React , {Component} from "react";
import "../../assests/styles/About/head.css"

class Head extends Component{
    render(){
        return(
            <div className="about-home">
                
            
            <div className="about-heading">
                    <div>
                        <h1 id="about-head">About Us</h1>
                        <h5 id="about-subhead">We have our offices Everywhere</h5>
                    </div>
                </div>
            <div className="company-aim">
            <div>
                <h3 id="aim">
                    Our <span className="keyword">passion for quality</span> has
                    helped us <br/> emerge as one of the most reputed and<br/> trusted names in the poultry industry.
                </h3>
            </div>
        </div>
        </div>
        )
    }
}
export default Head;