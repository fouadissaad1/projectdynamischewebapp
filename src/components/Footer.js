import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
function Footer(props){
    return (<MDBFooter color="blue" className="font-small pt-6 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <MDBCol md="6">
                    <h5 className="title">Exclusive Services</h5>
                    <ul>
                        <li>
                            <a href="#!">Book an Appointement</a>
                        </li>
                        <li>
                            <a href="#!">Exclusive Online Services</a>
                        </li>
                        <li>
                            <a href="#!">Delivery</a>
                        </li>

                    </ul>

                </MDBCol>
                <MDBCol md="6">
                    <h5 className="title">Links</h5>
                    <ul>
                        <li>
                            <a href="#!">Contact us</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Men's Wear</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Women's Wear</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Children</a>
                        </li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p>© 2021 Belgium Country Clothing • Fouad ISSAAD{props.name}</p>
            </MDBContainer>
        </div>
    </MDBFooter>);

}
export default Footer;