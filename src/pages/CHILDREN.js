import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export function CHILDREN() {
    return (
        <MDBContainer>
            <MDBRow>
                <h2>CHILDREN</h2>
            </MDBRow>

            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>


        </MDBContainer>
    );
}