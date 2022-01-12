// import React from "react";
import "../assests/styles/footer.css"
import Logo from "../assests/images/Logo.png"
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Facebook } from 'react-bootstrap-icons';

const FooterPage = () => {
  return (
    <div>
    <MDBFooter id="footer-main" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
          <img src={Logo} alt="footer_logo" className="footer-Image media-lefy" />
            <p id="footer-text" className="text-xl-left">
              Skylark feed is wholesum and nutritional feed, moset preffered
              meal in the Indian polutry market today. The various types of
              feed manufactured by us are well-balanced to fulfil the 
              different requirements of different birds.
            </p>
          </MDBCol>
          <MDBCol id="footer-links" md="3">
            <h5 className="title">Useful Links</h5>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
          </MDBCol> 
          <MDBCol id="footer-links" md="3">
            <h5 className="title">Contacts Us</h5>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
              <li className="list-unstyled">
                Lorem Ipsum
              </li>
          </MDBCol>
          <MDBCol id="footer-links" style={{"position":"relative"}} md="3">
            <h5 className="title text-right">
            <Facebook color="#3BB0A0" className=" text-xl  ml-4" />
            <Facebook color="#3BB0A0" className="ml-4"  />
            <Facebook color="#3BB0A0" className="ml-4" />
            <Facebook color="#3BB0A0"  className="ml-4" />
              </h5>
          </MDBCol>   
        </MDBRow>
      </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
              Copyright &copy;  {new Date().getFullYear()} Skylark Hatcheries Pvt. Ltd 
              </MDBContainer>
            </div>
            <div className="footer-last">
            </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;