import React , {Component} from "react";
import "../../assests/styles/About/philosophy.css"
import jQuery from "jquery";

class Philosophy extends Component{
    render(){
       function change_to_new(sel){
            var mainw = jQuery("#big-circle").width()
            var mainh = jQuery("#big-circle").height() - 200

            var side1w = jQuery("#small-circle1").width()
            var side1h = jQuery("#small-circle1").height()

            var side2w = jQuery("#small-circle2").width()
            var side2h = jQuery("#small-circle2").height()
            if (sel === "small_1"){
                jQuery("#small_1_changing").animate({"height":mainh,"width":mainw},500,"linear")
                jQuery("#big_changing").animate({"height":side2h,"width":side2w},500,"linear")
            }

            if (sel === "small_2"){
                jQuery("#small_2_changing").animate({"height":mainh,"width":mainw},500,"linear")
                jQuery("#big_changing").animate({"height":side1h,"width":side1w},500,"linear")
            }
        }


       function change_to_old(sel){
        var mainw = jQuery("#big-circle").width()
        var mainh = jQuery("#big-circle").height()

        var side1w = jQuery("#small-circle1").width()
        var side1h = jQuery("#small-circle1").height()

        var side2w = jQuery("#small-circle2").width()
        var side2h = jQuery("#small-circle2").height()

        if(sel === "small_1"){
        jQuery("#big_changing").animate({"height":side1h,"width":side1w},500,"linear")
        jQuery("#small_1_changing").animate({"height":side2h,"width":side2w -150},500,"linear")
        }

        if (sel === "small_2"){
            jQuery("#big_changing").animate({"height":side2h,"width":side2w},500,"linear")
            jQuery("#small_2_changing").animate({"height":side1h,"width":side1w -150},500,"linear")
        }


       }
        return(
            <div className="quality-philosophy">
                    <div>
                        <h1 className="quality-head">Our Quality Philosophy</h1>
                        <table className="quality-names">
                            <tbody>
                            <tr>
                                <td rowSpan="2" id="big-circle"><div id="big_changing" >Quality <br/>Processes</div></td>
                                <td  id="small-circle1" onMouseEnter={() => change_to_new("small_1")} onMouseLeave={() => change_to_old("small_1")} ><div id="small_1_changing">Quality <br/> Livestock</div></td>
                            </tr>
                            <tr>
                            <td id="small-circle2" onMouseEnter={() => change_to_new("small_2")} onMouseLeave={() => change_to_old("small_2")}><div id="small_2_changing">Quality <br/> Livestock</div></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
export default Philosophy;