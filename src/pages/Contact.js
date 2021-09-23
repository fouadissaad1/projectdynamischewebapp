import React from "react";
import { MDBCard, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdbreact";


export function Contact() {
    return (
        <MDBContainer>
              <MDBRow>
                <MDBCard className="card-body" style={{width: "21rem"}}>
                    <MDBCardTitle><h2>Contact information</h2></MDBCardTitle>
                    <MDBCardText>
                        <p>You can contact clothing in various ways. Below is an overview of the different contact
                            options.</p>
                    </MDBCardText>
                </MDBCard>
            </MDBRow>

            <MDBRow>
                    <MDBCard className="card-body" style={{width: "21rem"}}>
                        <MDBCardTitle><h2>Consumer</h2></MDBCardTitle>
                        <MDBCardText>
                            <p>Question?</p>
                            <p>klantenservice@clothingshop.be</p>
                            <p>+32 (0) 493 99 99 44</p>
                            <h4>Service and warranty</h4>
                            <p> service@clothingshop.be</p>
                            <h4 className="green-text">Payments and administrative</h4>
                            <p>Question?</p>
                            <p>administratie@cothingshop.be</p>
                        </MDBCardText>
                    </MDBCard>
                <MDBCard className="card-body" style={{width: "22rem"}}>
                    <MDBCardTitle><h2>For Business</h2></MDBCardTitle>
                    <MDBCardText>
                        <p>Question?</p>
                        <p> verkoop@cothingshop.be</p>
                        <p> +32 (0) 493 99 99 45</p>
                    </MDBCardText>
                </MDBCard>
            </MDBRow>
            <MDBRow>
            </MDBRow>
        </MDBContainer>
    );
}