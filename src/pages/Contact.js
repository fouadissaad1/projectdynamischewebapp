import { MDBBtn, MDBCol, MDBCollapse, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Business, Consumer, ContactInformation, Payments, ServiceWarranty } from "../components/ContactInformation";

export function Contact() {
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    return (
        <React.Fragment>
            <MDBRow></MDBRow>
            <MDBRow color={"red"}>
                <MDBCol lg={1}></MDBCol>
                <MDBCol lg={2}>
                    <MDBBtn onClick={toggleShow}>Contact information</MDBBtn>
                    <MDBCollapse show={showShow}>
                        <ContactInformation></ContactInformation>
                    </MDBCollapse>
                </MDBCol>
                <MDBCol lg={2}>
                    <MDBBtn onClick={toggleShow}>Consumer</MDBBtn>
                    <MDBCollapse show={showShow}>
                        <Consumer/>
                    </MDBCollapse>
                </MDBCol>
                <MDBCol>
                    <MDBBtn onClick={toggleShow}>Service and warranty</MDBBtn>
                    <MDBCollapse show={showShow}>
                        <ServiceWarranty/>
                    </MDBCollapse>
                </MDBCol>
                <MDBCol lg={2}>
                    <MDBBtn onClick={toggleShow}>Payments and administrative</MDBBtn>
                    <MDBCollapse show={showShow}>
                        <Payments/>
                    </MDBCollapse>
                </MDBCol>
                <MDBCol lg={2}>
                    <MDBBtn onClick={toggleShow}>For Business</MDBBtn>
                    <MDBCollapse show={showShow}>
                        <Business/>
                    </MDBCollapse>

                </MDBCol>
                <MDBCol lg={1}></MDBCol>
            </MDBRow>
            <MDBRow></MDBRow>
        </React.Fragment>
    );
}
