import React , {Component} from "react";
import "../../assests/styles/About/award.css"
import ayurvet from "../../assests/images/image 33.png"
import Face from "../../assests/images/image 32.png"
import pfi from "../../assests/images/image 35.png"
import IAI from "../../assests/images/image 37.png"
import clfma from "../../assests/images/image 39.png"
import HIFA from "../../assests/images/image 37-1.png"

class Award extends Component{
    render(){
        return(
            <div className="company-awards">
            <div className="award-heading"><h1 id="award-head">Our rich experience of over two decades in the poultry industry 
is acknowledged by a host of awards:</h1></div>
            {/* <div className="award-section1"> */}
                {/* <div className="award-main">
                    <div className="award-img1"><img id="img" src={ayurvet} alt="ayurvet"></img></div>
                    <div className="award-descp"><p id="descp">Felicitated as the Chief Guest at a
national seminar on 'Novel Feed
Additives' organised by Ayurvet, in 2012</p></div>
                </div>
                <div className="award-main">
                    <div className="award-img2"><img id="img" src={Face} alt="face"></img></div>
                    <div className="award-descp"><p id="descp">Appreciation award for contribution
to 1st Meat and Poultry
Summit 2013 by CII and FACE</p></div>
                </div>
                <div className="award-main">
                    <div className="award-img3"><img id="img" src={pfi} alt="pfi"></img></div>
                    <div className="award-descp"><p id="descp">Felicitated as the Chief Guest at a
national seminar on 'Novel Feed
Additives' organised by Ayurvet, in 2012</p></div>
                </div>
            </div> */}
            <div className="award-section1">
                <div className="award-main">
                    <div className="award-card">
                    <div className="award-img1"><img id="img" src={ayurvet} alt="ayurvet"></img></div>
                    <div className="award-descp"><p id="descp">Felicitated as the Chief Guest at a
national seminar on 'Novel Feed
Additives' organised by Ayurvet, in 2012</p></div>
                </div>
                    </div>

                <div className="award-main">
                    <div className="award-card">
                    <div className="award-img2"><img id="img" src={Face} alt="face"></img></div>
                    <div className="award-descp"><p id="descp">Appreciation award for contribution
to 1st Meat and Poultry
Summit 2013 by CII and FACE</p></div>
                    </div>
                </div>
                
                <div className="award-main">
                    <div className="award-card">
                    <div className="award-img3"><img id="img" src={pfi} alt="pfi"></img></div>
                    <div className="award-descp"><p id="descp">Felicitated as the Chief Guest at a
national seminar on 'Novel Feed
Additives' organised by Ayurvet, in 2012</p></div>
                    </div>
                </div>  
            </div>

            <div className="award-section2">
                <div className="award-main">
                    <div className="award-card">
                    <div className="award-img4"><img id="img" src={IAI} alt="IAI"></img></div>
                    <div className="award-descp"><p id="descp">Honoured as the Guest of Honour at
the International Animal Industry (IAI)
Expo 2011</p></div>
                    </div>
                </div>
                <div className="award-main">
                    <div className="award-card">
                    <div className="award-img5"><img id="img" src={clfma} alt="CLFMA"></img></div>
                    <div className="award-descp"><p id="descp">Awarded a certificate by CLFMA for the
Seminar on 'Animal Agriculture -
The Future' in 2010</p></div>
                    </div>
                </div>
                <div className="award-main">
                    <div className="award-card">
                    <div className="award-img4"><img id="img" src={HIFA} alt="HIFA"></img></div>
                    <div className="award-descp"><p id="descp">Awarded the 'Karmayogi Samman'
(2007-2008) by HIFA
</p></div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Award;