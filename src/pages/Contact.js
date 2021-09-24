import {MDBRow,MDBCol,MDBBtn,MDBCollapse} from "mdb-react-ui-kit";
import React, { useState } from "react";


export function Contact() {

    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    return (
        <React.Fragment>
            <MDBRow></MDBRow>
            <MDBRow color={"red"} bgColor={"primary"}>
                <MDBCol lg={1}></MDBCol>
                <MDBCol lg={2} >
                    <MDBBtn onClick={toggleShow}>Contact information</MDBBtn>
                    <MDBCollapse show={showShow}>
                        <p>You can contact clothing in various ways. Below is an overview of the different contact
                            options.</p>
                    </MDBCollapse>
            </MDBCol>
            <MDBCol lg={2} >
                <MDBBtn onClick={toggleShow}>Consumer</MDBBtn>
                <MDBCollapse show={showShow}>
                    <p>Question?</p>
                    <p>klantenservice@clothingshop.be</p>
                    <p>+32 (0) 493 99 99 44</p>
                </MDBCollapse>
            </MDBCol>
                <MDBCol>
                <MDBBtn onClick={toggleShow}>Service and warranty</MDBBtn>
                <MDBCollapse show={showShow}>
                    <p> service@clothingshop.be</p>
                </MDBCollapse>
                </MDBCol>
                <MDBCol lg={2}>
                <MDBBtn onClick={toggleShow}>Payments and administrative</MDBBtn>
                <MDBCollapse show={showShow}>
                    <p>Question?</p>
                    <p>administratie@cothingshop.be</p>
                </MDBCollapse>
            </MDBCol>
            <MDBCol lg={2} >
                <MDBBtn onClick={toggleShow}>For Business</MDBBtn>
                <MDBCollapse show={showShow}>
                    <p>Question?</p>
                    <p> verkoop@cothingshop.be</p>
                    <p> +32 (0) 493 99 99 45</p>
                </MDBCollapse>

            </MDBCol>
            <MDBCol lg={1}></MDBCol>
        </MDBRow>
            <MDBRow></MDBRow>
            </React.Fragment>


    );
}
