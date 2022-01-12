import React , {Component} from "react";
import "../../assests/styles/About/team.css"
import Ceo3 from "../../assests/images/Ceo3.png"
import Ceo2 from "../../assests/images/Ceo2.png"
import Ceo1 from "../../assests/images/CEO1.png"
class Team extends Component{
    render(){
        return(
            <div className="team">
                    <div>
                        <h1 id="team-heading">Our leadership team</h1>
                        <h5 id ="team-subhead">We have our offices everywhere</h5>
                    </div>
                    {/* <div className="team-members">
                        <div className="member">
                            <div className="image"><img src={Ceo3} alt="Ceo3"></img></div>
                            <div className="member-name"><h1 id="name">Jagbir Singh Dhull</h1></div>
                            <div className="member-position"><p id="position">Managing Director, <span className="keyword">Skylark Group</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                        </div>
                        <div className="member">
                            <div className="image"><img src={Ceo1} alt="Ceo1"></img></div>
                            <div className="member-name"><h1 id="name">Vikas Dhull</h1></div>
                            <div className="member-position"><p id="position">Managing Director, <span className="keyword">Skylark Feeds</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                        </div>
                        <div className="member">
                            <div className="image"><img src={Ceo2} alt="Ceo2"></img></div>
                            <div className="member-name"><h1 id="name">Nitesh Dhull</h1></div>
                            <div className="member-position"><p id="position">Director, HR, <span className="keyword">Skylark Group</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                        </div>
                    </div> */}
                    <div className="team-members">
                        <div className="member">
                            <div className="card">
                            <div className="image"><img src={Ceo3} alt="Ceo3"></img></div>
                            <div className="member-name"><h1 id="name">Jagbir Singh Dhull</h1></div>
                            <div className="member-position"><p id="position">Managing Director, <span className="keyword">Skylark Group</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                            </div>
                        </div>

                        <div className="member">
                            <div className="card">
                            <div className="image"><img src={Ceo1} alt="Ceo1"></img></div>
                            <div className="member-name"><h1 id="name">Vikas Dhull</h1></div>
                            <div className="member-position"><p id="position">Managing Director, <span className="keyword">Skylark Feeds</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                            </div>
                        </div>
                        
                        <div className="member">
                            <div className="card">
                            <div className="image"><img src={Ceo2} alt="Ceo2"></img></div>
                            <div className="member-name"><h1 id="name">Nitesh Dhull</h1></div>
                            <div className="member-position"><p id="position">Director, HR, <span className="keyword">Skylark Group</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                            </div>
                        </div>
                        
                        </div>
                </div>
        )
    }
}
export default Team;