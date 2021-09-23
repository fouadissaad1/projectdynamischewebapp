import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import welkomCoatsForWomen from '../images/welcome/abdf6295852cb3fa42bb5b55556848a6.jpg';
import welkomCoatsForMen from '../images/welcome/diy-cat-costumes-1565110063.jpg';
import welkomCoatsForChilderen from '../images/welcome/JenniferKellyG-201635210035178721None.jpg';

export function Home() {
    return (
        <MDBContainer fluid className="purple-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
            <MDBRow>
                <p>test</p>
            </MDBRow>
          <MDBRow>
              <MDBCol lg={4} md={12} >
                  <img src={welkomCoatsForWomen} className="img-fluid z-depth-1" alt="" />
              </MDBCol>
              <MDBCol lg={4} md={12} >
                  <img src={welkomCoatsForMen} className="img-fluid z-depth-1-half"
                       alt="" />
              </MDBCol>
              <MDBCol lg={4} md={12} >
                  <img src={welkomCoatsForChilderen} className="img-fluid z-depth-1-half"
                       alt="" />
              </MDBCol>

          </MDBRow>
        </MDBContainer>

    );
}