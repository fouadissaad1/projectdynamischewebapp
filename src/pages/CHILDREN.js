import React, { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol, MDBCollapse,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import KidAccPink from "../images/clothting/kids/girls/accesoires/V6808A6_21AU_PN1_02_01_600x.jpg";
import KidAccPrintedPink from "../images/clothting/kids/girls/accesoires/U1370A6_21SM_PN1_03_01_600x.jpg";
import KidAccBugsPink from "../images/clothting/kids/girls/accesoires/V1721A6_21WN_GR100_01_01_600x.jpg";
import KidLingBugsBeige from "../images/clothting/kids/girls/Leggings/H6991A6_20AU_BG287_01_01_600x.jpg";
import KidLingBugsGe from "../images/clothting/kids/girls/Leggings/T5991A6_20WN_GN7_01_01_600x.jpg";
import KidLingBugsBe from "../images/clothting/kids/girls/Leggings/H6991A6_20AU_BR88_01_02_600x.jpg";
import KidSkirtsBe from "../images/clothting/kids/girls/skirts&shorts/U7572A6_21SM_BG285_02_01_600x.jpg";
import KidSkirtst from "../images/clothting/kids/girls/skirts&shorts/T3841A6_21SP_BK27_01_02_600x.jpg";
import KidSkirtbr from "../images/clothting/kids/girls/skirts&shorts/S5917A6_20WN_BN101_01_02_600x.jpg";
import KidAccBoy from "../images/clothting/kids/boy/acce/N6830A6_21SP_IN8_02_02_600x.jpg";
import KidAccBoyHa from "../images/clothting/kids/boy/acce/S7000A6_21AU_BR2_01_01_600x.jpg";
import KidAccBoyU from "../images/clothting/kids/boy/acce/U0056A6_20WN_BK27_02_02_600x.jpg";
import KidOutB from "../images/clothting/kids/boy/out/N8173A6_21SP_KH287_01_02_600x.jpg";
import KidOutIn from "../images/clothting/kids/boy/out/N8178A6_21SP_IN120_01_02_600x.jpg";
import KidOutInt from "../images/clothting/kids/boy/out/N8171A6_20AU_BK27_02_02_600xi.jpg";
import KidShortBlue from "../images/clothting/kids/boy/Shorts/U0874A6_21HS_NM28_01_01_600x.jpg";
import KidShortGer from "../images/clothting/kids/boy/Shorts/T7756A6_21SP_GN667_02_01_600x.jpg";
import KidShortGr from "../images/clothting/kids/boy/Shorts/U5731A6_21SM_GR400_02_02_600x.jpg";
import babyvelvetCot from "../images/clothting/kids/baby/clothing/W2550A2_21AU_BR66_01_01_600x.jpg";
import babysleeveCot from "../images/clothting/kids/baby/clothing/W0873A2_21AU_BG285_01_01_600x.jpg";
import babysleeveHeartCot from "../images/clothting/kids/baby/clothing/W3325A2_21AU_BG26_01_01_600x.jpg";

import babyShoeBlue from "../images/clothting/kids/baby/shoes/FST00217_21SM_BE2_04_01_600x.jpg";
import babyShoePing from "../images/clothting/kids/baby/shoes/FST00108_21SM_PN381_06_01_600x.jpg";
import babyShoePing2 from "../images/clothting/kids/baby/shoes/FST00113_21SM_PN32_05_01_600x.jpg";
import babydresB from "../images/clothting/kids/baby/dres/U6263A2_21SM_BE394_02_01_600x.jpg";
import babydresR from "../images/clothting/kids/baby/dres/S6807A2_20WN_RD59_02_01_600x.jpg";

import babydresY from "../images/clothting/kids/baby/dres/W1019A2_21AU_YL17_03_01_600x.jpg";

const Kids_data = [
    {
        title: "Girl",
        name: "accesoires",
        KidPruducts: [
            {
                id: 1,
                name: "Unicorn Backpack",
                color: "Pink",
                price: 14.95,
                image: <img src={KidAccPink} alt="KidAccPink"/>
            },
            {
                id: 2,
                name: "Printed Beach Towel",
                color: "Pink",
                price: 14.95,
                image: <img src={KidAccPrintedPink} alt="KidAccPrintedPink"/>
            },
            {
                id: 3,
                name: "Bugs Bunny Licenced Knitted Gloves",
                color: "Grey",
                price: 10,
                image: <img src={KidAccBugsPink} alt="KidAccBugsPink"/>
            },
        ]


    },
    {
        name: "Leggings",
        KidPruducts: [
            {
                id: 1,
                name: "Slim Fit Ornamental Pocket Detailed Velvet Fabric Leggings",
                color: "Beige",
                price: 14,
                image: <img src={KidLingBugsBeige} alt="KidLingBugsBeige"/>
            },
            {
                id: 2,
                name: "Printed Text Tights",
                price: 11,
                image: <img src={KidLingBugsGe} alt="KidLingBugsGe"/>
            },
            {
                id: 3,
                name: "Slim Fit Ornamental Pocket Detailed Velvet Fabric Leggings",
                color: "Bordeaux",
                price: 12.54,
                image: <img src={KidLingBugsBe} alt="KidLingBugsBe"/>
            }
        ]
    },
    {
        name: "Skirts & Shorts",
        KidPruducts: [
            {
                id: 1,
                name: "Basic Drawstring Shorts",
                color: "Beige",
                price: 7.95,
                image: <img src={KidSkirtsBe} alt="KidSkirtsBe"/>
            },
            {
                id: 2,
                name: "Basic Shorts",
                color: "Black",
                price: 10.95,
                image: <img src={KidSkirtst} alt="KidSkirtst"/>
            },
            {
                id: 3,
                name: "Regular Fit Woven Skirt",
                color: "Beige",
                price: 25.95,
                image: <img src={KidSkirtbr} alt="KidSkirtbr"/>
            }

        ]
    },
    {
        title: "Boy",
        name: "Accesoires",
        KidPruducts: [
            {
                id: 1,
                name: "Cars' Printed Cap",
                color: "indigo",
                price: 8,
                image: <img src={KidAccBoy} alt="KidAccBoy"/>
            },
            {
                id: 2,
                name: "Harry Potter Licensed Backpack ",
                color: "Bordeaux",
                price: 14,
                image: <img src={KidAccBoyHa} alt="KidAccBoyHa"/>
            },
            {
                id: 3,
                name: "Licensed Discovery Channel Backpack ",
                color: "Black",
                price: 8,
                image: <img src={KidAccBoyU} alt="KidAccBoyU"/>
            }
        ]
    },
    {
        name: "Outerwear",
        KidPruducts: [
            {
                id: 1,
                name: "Regular Fit Coat ",
                color: "Khaki",
                price: 50.58,
                image: <img src={KidOutB} alt="KidOutB"/>
            },
            {
                id: 2,
                name: "Regular Fit Coat",
                color: "Indigo",
                price: 60,
                image: <img src={KidOutIn} alt="KidOutIn"/>
            },
            {
                id: 3,
                name: "Regular Fit Coat",
                color: "Black",
                price: 44.95,
                image: <img src={KidOutInt} alt="KidOutInt"/>
            }
        ]

    },
    {
        name: "Shorts",
        KidPruducts: [
            {
                id: 1,
                name: "Basic Drawstring Shorts",
                color: "Grey",
                price: 8.58,
                image: <img src={KidShortGr} alt="KidShortGr"/>
            },
            {
                id: 2,
                name: "Standard Hem Regular Fit Bermuda Shorts",
                color: "Green",
                price: 7.95,
                image: <img src={KidShortGer} alt="KidOutIn"/>
            },
            {
                id: 3,
                name: "Basic Drawstring Denim Bermuda Shorts with Pockets",
                color: "Blue",
                price: 12.95,
                image: <img src={KidShortBlue} alt="KidShortBlue"/>
            }
        ]

    },
    {
        title: "Baby",
        name: "Clothing",
        KidPruducts: [
            {
                id: 1,
                name: "Sleeveless Velvet Mini Dress",
                color: "Bordeaux",
                price: 28.58,
                image: <img src={babyvelvetCot} alt="babyvelvetCot"/>
            },
            {
                id: 2,
                name: "Long Sleeve Printed Newborn Bodysuit",
                color: "Beige",
                price: 37.95,
                image: <img src={babysleeveCot} alt="babysleeveCot"/>
            },
            {
                id: 3,
                name: "Long Sleeve Heart Print Pyjamas Set",
                color: "Beige",
                price: 32.95,
                image: <img src={babysleeveHeartCot} alt="babysleeveHeartCot"/>
            }
        ]

    },
    {
        name: "Shoes",
        KidPruducts: [
            {
                id: 1,
                name: "Hook And Loop Shoes",
                color: "Blue",
                price: 18.58,
                image: <img src={babyShoeBlue} alt="babyShoeBlue"/>
            },
            {
                id: 2,
                name: "Hook And Loop Shoes",
                color: "Pink",
                price: 17.95,
                image: <img src={babyShoePing} alt="babyShoePing"/>
            },
            {
                id: 3,
                name: "Hook And Loop Shoes",
                color: "Beige",
                price: 12.95,
                image: <img src={babyShoePing2} alt="babyShoePing2"/>
            }
        ]

    },
    {
        name: "Dresses",
        KidPruducts: [
            {
                id: 1,
                name: "Sleeveless Embroidered Denim Jean Dress",
                color: "Blue",
                price: 10.58,
                image: <img src={babydresB} alt="babydresB"/>
            },
            {
                id: 2,
                name: "Sleeveless Velvet Tulle Collared ",
                color: "Red",
                price: 17.95,
                image: <img src={babydresR} alt="babydresR"/>
            },
            {
                id: 3,
                name: "Long Sleeve Stay Cool Print Sleepsuit ",
                color: "Yellow",
                price: 12.95,
                image: <img src={babydresY} alt="babydresY"/>
            }
        ]

    }

]




function Category(props) {
    const {category} = props;
    const [show, setShow]=useState(!false);
    const toggle=()=>setShow(!show);
    return <div>
        <MDBBtn onClick={toggle}>
            <h3>{category.title} {category.name}</h3>
        </MDBBtn>
        <MDBCollapse show={show}>
            {
                category.KidPruducts.map((p) =>
                    <MDBCard>
                        <MDBCardBody>
                            <Kid key={p.id} kid={p}/>
                        </MDBCardBody>
                    </MDBCard>

                   )
            }
        </MDBCollapse>

    </div>
}

function Kid(props) {
    const {kid} = props;
    return <MDBContainer>
        <MDBRow>
            <MDBCol>
                <MDBCard style={{maxWidth: '22rem'}}>
                    {kid.image}
                    <MDBCardBody>
                        <MDBCardTitle>{kid.name}</MDBCardTitle>
                        <MDBCardText>
                            <p className="pMenStyle">color: {kid.color}</p>
                            <p className="pMenStyle">how much: {kid.price}&euro;</p>
                        </MDBCardText>
                        <MDBBtn href='#'>Ordre</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
}


export function CHILDREN() {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <h2>CHILDREN</h2>
            </MDBRow>
            <MDBRow>
                {
                    Kids_data.map((c, i) =>
                        <MDBCol>
                            <Category category={c} key={i}/>
                        </MDBCol>
                    )
                }

            </MDBRow>


        </MDBContainer>
    );
}