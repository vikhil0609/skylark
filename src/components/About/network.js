import React , {Component} from "react";
import "../../assests/styles/About/network.css"
import chicken from "../../assests/images/Chicken.png"
import bank from "../../assests/images/Bank.png"
import gitbranch from "../../assests/images/GitBranch.png"
import feed from "../../assests/images/Feed.png"
import eggs from "../../assests/images/Eggs.png"
import charging from "../../assests/images/charging-outline.png"
import chartbar from "../../assests/images/ChartBar.png"
import chartpie from "../../assests/images/ChartPieSlice.png"
import india from "../../assests/images/India.png"

class Network extends Component{
    render(){
        return(
            <div className="company-network">
		<h1 className="head">We are spread everywhere</h1>
		<div className="description">
		<p id="network-descp">An extensive network of farms, processing facilities, trade partners, distributors and contract farmers across India</p>	
		</div>

		<div className="imag"><img id="india-img" src={india}/></div>

{/* <div className="tabl"> */}
			
{/* <table className="network">
  <tbody>
  <tr className="row1">
    <td className="td"><img src={bank}></img></td>
    <td className="td"><img src={gitbranch} /></td>
    <td className="td"><img src={feed} /></td>
    <td className="td"><img src={chicken} /></td>
  </tr>
  <tr className="row2">
    <td className="td"><p className="iconName">4 Corporate offices</p></td>
    <td className="td"><p className="iconName">25 Corporate offices</p></td>
    <td className="td"><p className="iconName">120 Feed Plants</p></td>
    <td className="td"><p className="iconName">30 Breeding Centers</p></td>
  </tr>
  <tr className="row1">
    <td className="td"><img src={eggs} /></td>
    <td className="td"><img src={chartpie} /></td>
    <td className="td"><img src={chartbar} /></td>
    <td className="td"><img src={charging} /></td>
  </tr>
   <tr className="row2">
    <td className="td"><p className="iconName">21 Hatcheries</p></td>
    <td className="td"><p className="iconName">2 Processing (Nutrich)</p></td>
    <td className="td"><p className="iconName">5 Sales & Marketing</p></td>
    <td className="td"><p className="iconName">12 Mineral mixture plant</p></td>
  </tr>
  </tbody>
</table>
		</div> */}
    <div class="centered">
    
    <section class="cards1">
          
        <div class="card">
          <img className="bank-img" src={bank}></img>
          <p className="iconName">4 Corporate offices</p>
        </div>

        <div class="card">
          <img className="gitbranch-img" src={gitbranch}></img>
          <p className="iconName">25 Corporate offices</p>
        </div>

        <div class="card">
          <img className="feed-img" src={feed}></img>
          <p className="iconName">120 Feed Plants</p>
        </div>
        <div class="card">
          <img className="chicken-img" src={chicken}></img>
          <p className="iconName">30 Breeding Centers</p>
        </div>

    </section>
    <section class="cards2">
          
          <div class="card">
            <img className="bank-img" src={eggs}></img>
            <p className="iconName">4 Corporate offices</p>
          </div>
  
          <div class="card">
            <img className="gitbranch-img" src={chartpie}></img>
            <p className="iconName">25 Corporate offices</p>
          </div>
  
          <div class="card">
            <img className="feed-img" src={chartbar}></img>
            <p className="iconName">120 Feed Plants</p>
          </div>
          <div class="card">
            <img className="chicken-img" src={charging}></img>
            <p className="iconName">30 Breeding Centers</p>
          </div>
  
      </section>
</div>

	</div>
        )
    }
}
export default Network;