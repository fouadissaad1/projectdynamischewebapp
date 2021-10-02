import React from "react";
import WomenDresesBlue from "../images/clothting/Women/Dreses/R4469AZ_20SP_BE43_02_01_600x.jpg";
import WomenDresesYellow from "../images/clothting/Women/Dreses/S4885AZ_20HS_YL1_03_01_600x.jpg";
import WomenDresesWhite from "../images/clothting/Women/Dreses/V0563AZ_21SM_WT34_01_01_600x.jpg";
import WomenJeansBlack from "../images/clothting/Women/Jeans/T9537AZ_21SM_NM40_05_02_600xB.jpg";
import WomenJeansBlue1 from "../images/clothting/Women/Jeans/S7241AZ_21SP_NM28_01_01_600x.jpg";
import WomenJeansBlue2 from "../images/clothting/Women/Jeans/L0595AZ_20SP_NM39_01_03_600x.jpg";
import WomenJeansBlue3 from "../images/clothting/Women/Jeans/V4998AZ_21AU_NM28_01_01_600x.jpg";

const WOMEN_CLOTHING_DATA = [
    {
        name: "Dreses",
        womenProduts: [
            {
                name: "Floral Patterned Knit Dres",
                size: "L",
                color: "Yellow",
                prijs: 15.99,
                image: <img src={WomenDresesYellow} alt="WomenDresesYellow"/>
            },
            {
                name: "Floral Patterned Knit Dres",
                size: "L",
                color: "blue",
                prijs: 15.99,
                image: <img src={WomenDresesBlue} alt="WomenDresesBlue"/>
            },
            {
                name: "Patterned off Shoulder Dres",
                size: "L",
                color: "White",
                prijs: 29.99,
                image: <img src={WomenDresesWhite} alt="WomenDresesWhite"/>
            },

        ],

    },
    {
        name: "jeans",
        womenProduts: [
            {
                name: "Wide Leg Fit Extra High Waist Dirty jeans",
                size: "XS",
                color: "black",
                prijs: 19.9,
                image: <img src={WomenJeansBlack} alt="WomenJeansBlack"/>
            },
            {
                name: "Two-Tone Mom Fit Jeans jeans",
                size: "L",
                color: "Bleu",
                prijs: 19.9,
                image: <img src={WomenJeansBlue1} alt="WomenJeansBlue1"/>
            },
            {
                name: "Mom Fit Extra High Waist Jeans",
                size: "M",
                color: "Bleu",
                prijs: 29.9,
                image: <img src={WomenJeansBlue2} alt="WomenJeansBlue2"/>
            },
            {
                name: "Mom Fit Extra High Waist jeans",
                size: "S",
                color: "black",
                prijs: 24.99,
                image: <img src={WomenJeansBlue3} alt="WomenJeansBlue3"/>
            },

        ],

    },
    {
        name: "jackets",
        womenProduts: [
            {name: "Dreses", size: "L", color: "Yellow", prijs: 9.9},
        ],

    }

];

function Category(props) {
    const {category} = props;
    return <div>
        <h3>{category.name}</h3>
        {
            category.womenProduts.map((p) => <Women key={p.name} women={p}/>)
        }
    </div>
}

function Women(props) {
    const {women} = props;
    return <div>
        <div className="tshirtman"><h3>{women.name}</h3></div>
        <div className="tshirtman">size: {women.size}</div>
        <div className="tshirtman">color: {women.color}</div>
        <div className="tshirtman">prijs: {women.prijs}&euro;</div>
        <div className="tshirtman">foto: {women.image}</div>

    </div>
}

export function WOMEN() {
    return (
        <div>
            <h2>Women</h2>
            <div>
                {
                    WOMEN_CLOTHING_DATA.map((c, i) => <Category category={c} key={i}/>)
                }
            </div>
        </div>
    );
}

