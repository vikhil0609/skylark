import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import "../../assests/styles/Home/parivar.css"
import man from "../../assests/images/man.png";


function Carousell(props) {
    const items = [
        {
            name: 'Mr. Deepak Mishra',
            description: 'Sunday farms, Uttar Pradesh',
            full_description : 'our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.',
            imageSrc : man,

        },
        {
            name: 'Mr. Deepak Mishra',
            description: 'Sunday farms, Uttar Pradesh',
            full_description : 'our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.',
            imageSrc : man,
        },
        {
            name: 'Mr. Deepak Mishra',
            description: 'Sunday farms, Uttar Pradesh',
            full_description : 'our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.',
            imageSrc : man,
        },
    ];

    return (
        <Carousel 
        autoPlay="true"
        navButtonsAlwaysVisible="true"
        activeIndicatorIconButtonProps={{
            style: {
                color: '#37B0A1',
            }
            }}
            indicatorIconButtonProps={{
                style: {
                    fontSize: "rem",
                    width:"10px",
                    padding: '15px',  

                }
            }}

            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    width:"8em",
                    fontSize:"2rem",
                    backgroundColor: 'transparent',
                }
            }}
            animation="slide" >
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}

const Item = ({name, description,full_description,imageSrc}) => {
    return (
        <div style={{backgroundColor:"#eff9f8;"}}>
            <div className="carousel-heading">
                <h1>Humara Layer Pariwar</h1>
                <p>lopem epsum</p>
            </div>
            <div className="carousel-description">
                <img src={imageSrc} />
                <div className="carousel-sub-description">
                    <h2>{name}</h2>
                    <h5 style={{color:"#4B5159"}}>{description}</h5>
                    <div className="sub-text">
                        <p>{full_description}
                        </p>
                    </div>   
                    <div className="stats">
                        <div className="years">
                            <h1>5</h1>
                            <h4>Years</h4>
                        </div>
                        <div className="percent">
                            <h1>99.99%</h1>
                            <h4>Lorem ipsum</h4>
                        </div>
                        <div className="farms">
                            <h1>1000</h1>
                            <h4>farms</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousell;