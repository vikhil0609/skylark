import React , {Component} from "react";
import "../../assests/styles/About/timeline.css"
import bank from "../../assests/images/Bank.png"
class Timeline extends Component{
    render(){
        return(
            // <div className="timeline-body">
            //     <div> 
            //     <h1 className="h">Our Journey</h1>
            //     </div>

            //     <div className="d">
            //         <p>Celeberating 50 Years of glory in the Hatcheries era</p>
            //     </div>

            //     <div><i className="arrow up"></i></div>


            //     <div className="timeline">

            //     <div className="dg">
            //         <h1 className="Years">1985</h1>
            //         <div className="timeline-container right">
            //         <div className="content">
            //             <p id="timeline-descp">
            // Me. Jagbir Singh Dhull and Mr. Jasbir Singh Deswal established Skylark Hatcheries
            //             </p>
            //         </div>
            //     </div>
            // </div>
            

            // <div className="dg"><h1 className="Years H1">1985</h1>
            // <div className="timeline-container right b1">
            //     <div className="content c1">
            //     <p id="timeline-desp">Skylark research and breeding farm established at village Urlana Kalan, Haryana
            // </p>
            //     </div>
            // </div>
            // </div>
            
            // <div className="dg"><h1 className="Years">1985</h1>
            // <div className="timeline-container right">
            //     <div className="content">
            //     <p id="timeline-descp">Himgiri Hatcheries was set up in a village in Himachal Pradesh
            // </p>
            //     </div>
            // </div>
            // </div>


            // <div className="dg"><h1 className="Years H2">1985</h1>
            // <div className="timeline-container right b2">
            //         <div className="content c2">
            //     <p id="timeline-desp">Breeder capacity increased to 2,00,000. Skylark breeding farm renamed
            // </p>
            //     </div>
            // </div>
            // </div>

            // </div>
            //     <div><i className="arrow down"></i></div>
            // </div>
            // <div id="workexperience" class="sectionClass">
            //     <div class="row ">
            //         <div class="sectiontitle">
            //         <h2>Our Journey</h2>
            //         {/* <span class="headerLine"></span> */}
            //         </div>
            //         <div class="fullWidth eight columns">
            //         <ul class="cbp_tmtimeline">
            //             <li>
            //                 {/* <div className="Year">1995</div> */}
            //             <div class="cbp_tmicon cbp_tmicon-phone">
            //                 <span className="Year">1995</span>
            //                 <i class="faPra fa-briefcase"></i>
            //             </div>
            //             <div class="cbp_tmlabel wow fadeInRight animated">
            //                 <h3>Web developer</h3>
            //                 <div class="date">
            //                 <i class="fa fa-calendar"></i>April 2014 - Current
            //                 </div>
            //                 <h4><i class="fa fa-flag"></i>Davic Company, Bratislava</h4>
            //                 <p class="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur sequi tempora.</p>
            //             </div>
            //             </li>
            //             <li>
            //             <div class="cbp_tmicon cbp_tmicon-screen">
            //                 <i class="faPra fa-briefcase"></i>
            //             </div>
            //             <div class="cbp_tmlabel wow fadeInRight animated">
            //                 <h3>Web designer</h3>
            //                 <h4><i class="fa fa-flag"></i>Fannous Company, Prague</h4>
            //                 <div class="date"><i class="fa fa-calendar"></i>June 2012 - April 2014</div>
            //                 <p class="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quasi perspiciatis, aliquid sed maiores accusamus. Adipisci quidem nostrum quos quae doloremque esse a, ipsum earum, recusandae omnis dignissimos et sint.</p>
            //             </div>
            //             </li>
            //             <li>
            //             <div class="cbp_tmicon cbp_tmicon-mail">
            //                 <i class="faPra fa-briefcase"></i>
            //             </div>
            //             <div class="cbp_tmlabel wow fadeInRight animated">
            //                 <h3>Web designer</h3>
            //                 <h4><i class="fa fa-flag"></i>Techixs Company, London</h4>
            //                 <div class="date"><i class="fa fa-calendar"></i>November 2009 - June 2012</div>
            //                 <p class="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla labore atque alias ipsa, nam quod rerum repellat cumque, aliquam sequi vitae voluptatibus cum soluta incidunt tempore accusamus eius sed excepturi!Lorem ipsum dolor sit amet,
            //                 consectetur adipisicing elit. Tempora natus veritatis aperiam repellendus dolor vel, expedita assumenda eos, mollitia quae ullam esse voluptas vero. Dolores culpa eaque vitae eum quibusdam?</p>

            //             </div>
            //             </li>
            //             <li>
            //             <div class="cbp_tmicon cbp_tmicon-phone">
            //                 <i class="faPra fa-briefcase"></i>
            //             </div>
            //             <div class="cbp_tmlabel wow fadeInRight animated">
            //                 <h3>Freelancer</h3>
            //                 <div class="date"><i class="fa fa-calendar"></i>Januar 2006 - November 2009</div>
            //                 <p class="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iusto, possimus hic at quisquam, incidunt illo asperiores et nobis, qui nulla consequatur molestiae quibusdam expedita dignissimos? Iste eum velit quos.</p>
            //             </div>
            //             </li>
            //         </ul>
            //         </div>
            //     </div>
            //     </div>
<div className="timeline-container">
			<div className="timeline-main">
            <div> 
               <h1 className="h">Our Journey</h1>
            </div>
            <div className="d">
                   <p>Celeberating 50 Years of glory in the Hatcheries era</p>
             </div>
				<ul className="cbp_tmtimeline">
					<li>
						<time className="cbp_tmtime"><span>1985</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone"></div>
						<div className="cbp_tmlabel">
							{/* <h2>Ricebean black-eyed pea</h2> */}
							<p>Me. Jagbir Singh Dhull and Mr. Jasbir Singh Deswal established Skylark Hatcheries</p>
						</div>
					</li>
					<li>
						<time className="cbp_tmtime"><span>1996</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone"></div>
						<div className="cbp_tmlabel">
							{/* <h2>Greens radish arugula</h2> */}
							<p>Skylark research and breeding farm established at village Urlana Kalan, Haryana</p>
						</div>
					</li>
					<li>
						<time className="cbp_tmtime"><span>1997</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone" ></div>
						<div className="cbp_tmlabel">
							{/* <h2>Sprout garlic kohlrabi</h2> */}
							<p>Himgiri Hatcheries was set up in a village in Himachal Pradesh</p>
						</div>
					</li>
					<li>
						<time className="cbp_tmtime"><span>2000</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone"></div>
						<div className="cbp_tmlabel">
							{/* <h2>Watercress ricebean</h2> */}
							<p>Breeder capacity increased to 2,00,000. Skylark breeding farm renamed</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
        )
    }
}
export default Timeline;