import React, { Component, useRef, useEffect } from "react";
import "../../assests/styles/Home/home.css"
import Egg from "../../assests//images/egg.png"
function Home(){
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView(); 

    function testing(){
        window.scrollTo(500, 815);
    }
    return(
        <div>
            <div className="home-header">
                <h1>Prospering through <strong>integration</strong></h1>
                <div className="header-sub">
                <h6>Our diverse protfolioof operations ranging from Grandparent farms to large-scale mechanised farming
                <br />makes us one of the largest vartically integrated poultry producers in the world</h6>
                </div>
                <div className="egg" onClick={() => testing()}>
                    <img src={Egg} alt="Egg"/>
                    <div>
                        click to open
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;