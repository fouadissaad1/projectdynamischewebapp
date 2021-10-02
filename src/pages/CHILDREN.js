import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
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

const Kids_data = [
    {
        title:"Girl",
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
        KidPruducts:[
            {
                id:1,
                name:"Slim Fit Ornamental Pocket Detailed Velvet Fabric Leggings",
                color:"Beige",
                price:14,
                image: <img src={KidLingBugsBeige} alt="KidLingBugsBeige"/>
            },
            {
                id:2,
                name:"Printed Text Tights",
                price:11,
                image: <img src={KidLingBugsGe} alt="KidLingBugsGe"/>
            },
            {
                id:3,
                name:"Slim Fit Ornamental Pocket Detailed Velvet Fabric Leggings",
                color:"Bordeaux",
                price:12.54,
                image: <img src={KidLingBugsBe} alt="KidLingBugsBe"/>
            }
        ]
    },
    {
        name:"Skirts & Shorts",
        KidPruducts:[
            {
                id:1,
                name:"Basic Drawstring Shorts",
                color: "Beige",
                price: 7.95,
                image: <img src={KidSkirtsBe} alt="KidSkirtsBe"/>
            },
            {
                id:2,
                name:"Basic Shorts",
                color: "Black",
                price: 10.95,
                image: <img src={KidSkirtst} alt="KidSkirtst"/>
            },
            {
                id:3,
                name:"Regular Fit Woven Skirt",
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
                id:1,
                name:"Cars' Printed Cap",
                color: "indigo",
                price: 8,
                image: <img src={KidAccBoy} alt="KidAccBoy"/>
            },
            {
                id:2,
                name:"Harry Potter Licensed Backpack ",
                color: "Bordeaux",
                price: 14,
                image: <img src={KidAccBoyHa} alt="KidAccBoyHa"/>
            },
            {
                id:3,
                name:"Licensed Discovery Channel Backpack ",
                color: "Black",
                price: 8,
                image: <img src={KidAccBoyU} alt="KidAccBoyU"/>
            }
        ]
    }

]

function Category(props) {
    const {category} = props;
    return <div>
        <h3>{category.title}</h3>
        <h3>{category.name}</h3>
        {
            category.KidPruducts.map((p) => <Kid key={p.id} kid={p}/>)
        }
    </div>
}

function Kid(props) {
    const {kid} = props;
    return <div>
        <h3>{kid.name}</h3>
        <p className="pMenStyle">color: {kid.color}</p>
        <p className="pMenStyle">how much: {kid.price}&euro;</p>
        {kid.image}
    </div>
}



export function CHILDREN() {
    return (
        <MDBContainer>
            <MDBRow>
                <h2>CHILDREN</h2>
            </MDBRow>
            {
                Kids_data.map((c, i) => <Category category={c} key={i}/>)
            }
            <MDBRow>

            </MDBRow>


        </MDBContainer>
    );
}