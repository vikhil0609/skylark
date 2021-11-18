import React from "react";
import "../../assests/styles/Home/global.css"
import Ghana from "../../assests/images/Flag_of_Ghana.png"
import Myanmar from "../../assests/images/Flag_of_Myanmar.png"
import Srilanka from "../../assests/images/Flag_of_Sri_Lanka.png"
import BgGhana from "../../assests/images/Ghana.png"
import BgMyanmar from "../../assests/images/myanmar.png"

class Global extends React.Component{
    render(){
        return(
            <div className="global">
                <div className="global-heading">
                    <h1>Our Global Family</h1>
                    <p>Celebrating 50 years of Glory in the Hatcheries era.</p>
                </div>
                <div className="global-content">
                    <div className="contentFirst">
                        <div>
                        <img className="backgroundCountry" src={BgGhana} />
                            <h2>Park Agrotech 
                                <br />Pvt. Ltd</h2>
                            <div>
                                <img src={Ghana} />
                                Ghana
                            </div>
                            <p>A solution driven step to reoreint and 
                                modernize the poultry sector of Ghana
                                 was carried out after an emerging joint
                                  venture of Park Agrotech Pvt. Ltd. with
                                   Skylark Hatcheries in 2015</p>
                        </div>
                        <div>
                        <img className="backgroundCountry" src={BgMyanmar} />
                            <h2>Skylark Sunline
                                <br /> Company Ltd.</h2>
                            <div>
                                <img src={Myanmar} />
                                Myanmar
                            </div>
                            <p>A solution driven step to reoreint and 
                                modernize the poultry sector of Ghana 
                                was carried out after an emerging joint
                                 venture of Park Agrotech Pvt. Ltd. with
                                  Skylark Hatcheries in 2015</p>
                        </div>
                        </div>
                        <div className="contentSecond">
                        <div>
                        <img className="backgroundCountry" src={BgGhana} />
                            
                            <h2>Park Agrotech 
                                <br />Pvt. Ltd</h2>
                            <div>
                                <img src={Srilanka} />
                                SriLanka
                            </div>
                            <p>A solution driven step to reoreint and 
                                modernize the poultry sector of Ghana
                                 was carried out after an emerging joint
                                  venture of Park Agrotech Pvt. Ltd. with
                                   Skylark Hatcheries in 2015</p>
                        </div>
                        <div>
                        <img className="backgroundCountry" src={BgGhana} />
                            <h2>Skylark Sunline
                                <br /> Company Ltd.</h2>
                            <div>
                                <img src={Myanmar} />
                                Myanmar
                            </div>
                            <p>A solution driven step to reoreint and 
                                modernize the poultry sector of Ghana 
                                was carried out after an emerging joint
                                 venture of Park Agrotech Pvt. Ltd. with
                                  Skylark Hatcheries in 2015</p>
                        </div>
                        <div>
                        <img className="backgroundCountry" src={BgGhana} />
                            <h2>Skylark Sunline
                                <br /> Company Ltd.</h2>
                            <div>
                                <img src={Myanmar} />
                                Myanmar
                            </div>
                            <p>A solution driven step to reoreint and 
                                modernize the poultry sector of Ghana 
                                was carried out after an emerging joint
                                 venture of Park Agrotech Pvt. Ltd. with
                                  Skylark Hatcheries in 2015</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default Global;