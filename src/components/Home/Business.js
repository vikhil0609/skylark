import React from "react";
import Navbar from "../Navbar"
import "../../assests/styles/Home/business.css"
import jQuery from "jquery";
import Closeup from "../../assests/images/close-up.jpg"
import Eggshell from "../../assests/images/eggShell.jpg"
import Topview from "../../assests/images/top-view.jpg"
import whiteFoam from "../../assests/images/white-foam.jpg"
import Tractor from "../../assests/images/tractor.jpg"

class Business extends React.Component{

    render() {
        return(
            <div className="business">
                <div id="testing" className="business-head" >
                    <h1>Our Businesness</h1>
                    <h4 >our diverse portfolio of 
                    operations ranging from Grandparents
                     farms</h4>
                </div>
                <div>
                    <NavigationBars />
                </div>
            </div>    
        )
    }
}

export default Business

class NavigationBars extends React.Component{
    render(){
        this.state={
            Element:"mid",

        }

    function remove(){
        jQuery(".mid").removeAttr('id');
    }

    function add(){
        jQuery(".mid").attr("id",'hover');
    }

        return (
            <div className="image_box"> 
                <div className="box" id="first" onMouseEnter={() => remove()}
                    onMouseLeave={() => add()}>
                        {/* <img src={Tractor} /> */}
                    <div>   
                    <h1>moment</h1>
                    <p>
                        our diverse portfolio of operations ranging from
                        Grandparents farms to large-scale
                        mechanised farming makes us one of the largest
                        vertically integrated poultry producers
                        in the world
                   </p>

                   <button>
                       Explore more &#8594;
                   </button>
                   </div>
                   
                </div>
                <div className="box" id="second" onMouseEnter={() => remove()}
                    onMouseLeave={() => add()}>
                        {/* <img src={Closeup} /> */}
                    <div>
                    <h1>Feed</h1>
                    <p>
                        our diverse portfolio of operations ranging from
                        Grandparents farms to large-scale
                        mechanised farming makes us one of the largest
                        vertically integrated poultry producers
                        in the world
                   </p>

                   <button>
                       Explore more &#8594;
                   </button>
                   </div>
                   
                </div>

                <div className="box mid" id={ `${this.state.Element == "mid" ? "hover":"" }`}>
                    {/* <img src={Topview} /> */}
                    <div>
                    <h1>Hatchery</h1>
                    <p>
                        our diverse portfolio of operations ranging from
                        Grandparents farms to large-scale
                        mechanised farming makes us one of the largest
                        vertically integrated poultry producers
                        in the world
                   </p>

                   <button>
                       Explore more &#8594;
                   </button>
                   </div>
                   
                </div>

 <              div className="box" id="secondlast" onMouseEnter={() => remove()}
                    onMouseLeave={() => add()}>
                        {/* <img src={whiteFoam} /> */}
                    <div>
                    <h1>Food</h1>
                    <p>
                        our diverse portfolio of operations ranging from
                        Grandparents farms to large-scale
                        mechanised farming makes us one of the largest
                        vertically integrated poultry producers
                        in the world
                   </p>

                   <button>
                       Explore more &#8594;
                   </button>
                   </div>
                   
                </div>
                <div className="box" id="last" onMouseEnter={() => remove()}
                    onMouseLeave={() => add()}>
                        {/* <img src={Eggshell} /> */}
                    <div>
                    <h1>Protein</h1>
                    <p>
                        our diverse portfolio of operations ranging from
                        Grandparents farms to large-scale
                        mechanised farming makes us one of the largest
                        vertically integrated poultry producers
                        in the world
                   </p>
                   <button>
                       Explore more &#8594;
                   </button>
                   </div>
                </div>
            </div>
        )
    }
}