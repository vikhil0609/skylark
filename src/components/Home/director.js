import React from "react";
import "../../assests/styles/Home/director.css"
import Director_Image from "../../assests/images/Director.png"

class Director extends React.Component{

    render(){
        return(
            <div className="director">
                <div className="director-heading">
                    <h2 style={{color:"#2C323C"}}>Word from the director</h2>
                </div>
                <div className="director-content">
                    <div className="director-left">
                        <h2>Mr. Jagbir Singh Dhull</h2>
                        <h4>MD, Skylark Hatcheries</h4>
                        <p>If there is one word that summarises Skylark, it is Passion - Passion for 
                        Quality, Passion for Excellence, and Passion for Progress.</p>
                        <p>Quality, at Skylark, is not just a word but a philosophy that is 
                        ingrained across our processes and operations. We have always strived to
                         be a quality leader in India's poultry sector and it is this quest that helps us stand apart.</p>
                        <p>Excellence and quality go hand in hand. One is necessary for achieving the other. 
                        An important factor that has contributed towards excellence at Skylark, is integration. 
                        Around 15 years back, we embarked on a journey to integrate our businesses, both forward and backward. 
                        Today, we ensure excellence by not only controlling the genetic quality of the chickens we raise, 
                        but also by undertaking large-scale mechanised farming to ensure the nutritional value of the feed provided to them.</p>
                        <p>When we talk about progress, we do not mean it just for Skylark, but also for the farming and
                         business community at large. We command respect in the market today because our products have 
                         ensured higher profits for everyone involved</p>
                    </div>
                    <div className="director-right">
                        <img src={Director_Image} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Director