import React, {Component} from "react"
import {Button} from "react-bootstrap"
import "../../assests/styles/Home/sustainable.css"

class Sustainable extends Component {

    render (){
        return (
            <div className="sustainable">
                <div className="sustain-heading">
                    <h1> We are <br /><strong style={{color:"#04AA6D",marginTop:"10px"}}>Sustainable!</strong></h1>
                    <p>
                        Our diverse portfolio operations ranging from
                        farms Our diverse portfolio operations ranging from
                        farms Our diverse portfolio operations ranging from
                        farms.
                    </p>
                    <Button className="sustain-button" variant="success">Explore more <b>&#8594;</b></Button>
                </div>
                <div className="sustain-right">
                    <div className="biogas">
                        <div className="sustain-right-head">
                            <b><h3>Biogas Plant</h3></b>
                            <p>In order to manage the large amount of
                                organic waste generated in our facilities,
                                we have installed indigenously designed
                                biogas plants. The clean energy
                                generated from these plants enables us to
                                depend less on the grid electricity and 
                                diesel-based generators.
                            </p>
                        </div>
                    </div>
                    <div className="fertilizer">
                    <div className="sustain-right-head">
                            <h3>Fertilizers</h3>
                            <p>Our diverse portflio of operations ranging
                                from Grandparents farms to large-scale
                                mechanised farming makes us one of the
                                largest vertically integrated polutry
                                produces in the worls
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sustainable;