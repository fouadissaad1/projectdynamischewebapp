import React from "react";
import { MEN_CLOTHING_DATA } from "../data/data";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";

function Category(props){
    const {category}=props;
    return <div>
        <h3 className="title">{category.name}</h3>
        {
            category.products.map((p)=><Man key={p.id} man={p}/>)
        }
    </div>
}

function Man(props){
    const {man}=props;
    return (
        <MDBCard style={{ maxWidth: '22rem' }}>
            {man.image}
            <MDBCardBody>
                <MDBCardTitle>{man.name}</MDBCardTitle>
                <MDBCardText>
                    <p className="pMenStyle">size: {man.size} </p>
                    <p className="pMenStyle">color: {man.color}</p>
                    <p className="pMenStyle">how much: {man.prijs}&euro;</p>

                </MDBCardText>
                <MDBBtn href='#'>Ordre</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}


export function MEN() {
    return (
        <div>

            <h2>Men</h2>

            <hr/>
            <div>
                {MEN_CLOTHING_DATA.map((c,i)=><Category category={c} key={i}/>)}
            </div>

        </div>
    );
}