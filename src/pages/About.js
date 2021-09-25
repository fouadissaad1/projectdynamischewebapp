import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { TEAM_DATA } from "../data/data";
import { AboutInformation, Teams } from "../components/AboutCompents";

export function About() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol size="12" sm="6" lg="8">
                    <AboutInformation/>
                    {
                        TEAM_DATA.map((p) => <Teams key={p.id} teams={p}/>)
                    }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}