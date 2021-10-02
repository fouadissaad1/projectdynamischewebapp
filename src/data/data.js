import mijnFoto from "../images/teams/fouadIssaad.png";
import sofiFoto from "../images/teams/sofi.png";
import janFoto from "../images/teams/jan.png";
import nadiaFoto from "../images/teams/nadia.png";
import React from "react";
import MuscleTshirt from "../images/clothting/man/tshirt/MuscleTShirt.jpg";
import GrandadTShirt from "../images/clothting/man/tshirt/GrandadTShirt.jpg";
import NavyOrganic from "../images/clothting/man/tshirt/NavyOrganic.jpg";
import CharcoalMuscleFitTShirt from "../images/clothting/man/tshirt/CharcoalMuscleFitTShirt.jpg";
import NavyOrganicRaglanTShirt from "../images/clothting/man/tshirt/NavyOrganicRaglanTShirt.jpg";
import JacquardCollarPolo from "../images/clothting/man/Polo/JacquardCollarPolo.jpeg";
import EcruStripePoloJumper from "../images/clothting/man/Polo/EcruStripePoloJumper.jpg";
import NavyRibZipNeckPolo from "../images/clothting/man/Polo/NavyRibZipNeckPolo.jpg";
import StrainghtMidWashJeans from "../images/clothting/man/jeans/StrainghtMidWashJeans.jpg";
import SkinnyRomanVintageOrganicJeans from "../images/clothting/man/jeans/SkinnyRomanVintageOrganicJeans.jpg";
import SkinnyHyperBlueOrganicJeans from "../images/clothting/man/jeans/SkinnyHyperBlueOrganicJeans.jpg";
import SlimfitOrganicJeans from "../images/clothting/man/jeans/SlimfitOrganicJeans.jpg";
import WomenDresesYellow from "../images/clothting/Women/Dreses/S4885AZ_20HS_YL1_03_01_600x.jpg";
import WomenDresesBlue from "../images/clothting/Women/Dreses/R4469AZ_20SP_BE43_02_01_600x.jpg";
import WomenDresesWhite from "../images/clothting/Women/Dreses/V0563AZ_21SM_WT34_01_01_600x.jpg";
import WomenJeansBlack from "../images/clothting/Women/Jeans/T9537AZ_21SM_NM40_05_02_600xB.jpg";
import WomenJeansBlue1 from "../images/clothting/Women/Jeans/S7241AZ_21SP_NM28_01_01_600x.jpg";
import WomenJeansBlue2 from "../images/clothting/Women/Jeans/L0595AZ_20SP_NM39_01_03_600x.jpg";
import WomenJeansBlue3 from "../images/clothting/Women/Jeans/V4998AZ_21AU_NM28_01_01_600x.jpg";

export const TEAM_DATA = [
    {
        id: 1,
        image: <img src={mijnFoto} alt={mijnFoto}/>,
        name: "fouad issaad",
        description: "I'm The CEO Of A Company With 177 Employees That's Been Entirely Remote For 1 Year.\n" +
            "I'm the CEO of a company with 177 employees that's been entirely remote for 13 years. Here are 5 ways we built a thriving remote work culture.",
        email: "issaad.fouad@shoppting.com"
    },
    {
        id: 2,
        image: <img src={sofiFoto} alt={sofiFoto}/>,
        name: "Sofia Cools",
        description: "I’m an accountant for Shopping people in Belgium. Here’s what surprises my clients most about their " +
            "and what I love about my job.",
        email: "Cools.Sofia@shoppting.com"
    },
    {
        id: 3,
        image: <img src={janFoto} alt={janFoto}/>,
        name: "Jan Janssen",
        description: "I am selling , if you have question ask me",
        email: "Janssen.Jan@shoppting.com"
    },
    {
        id: 4,
        image: <img src={nadiaFoto} alt={nadiaFoto}/>,
        name: "Nadia Creve",
        description: "Welcome to Humor Resources! I'am  HR Pros bringing " +
            "Iam the crazy things that happen in the workplace, with the help of - you guessed it - COMEDIANS! This isn’t the rules-y HR, this is the FUN HR. " +
            "Humor Resources...because HR is funny.",
        email: "Creve.Nadia@shoppting.com"
    }
]
export const MEN_CLOTHING_DATA = [
    {
        name: "T'Shirt",
        products: [
            {
                id: 1,
                name: "Muscle T'Shirt",
                size: "XS",
                color: "Brown",
                prijs: 4.8,
                image: <img src={MuscleTshirt} alt="MuscleTshirt"/>
            },
            {
                id: 2,
                name: "Grandad T'Shirt",
                size: "S",
                color: "Ping",
                prijs: 5,
                image: <img src={GrandadTShirt} alt="GrandadTShirt"/>
            },
            {
                id: 3,
                name: "Navy Organic T'Shirt",
                size: "M",
                color: "Red",
                prijs: 3.6,
                image: <img src={NavyOrganic} alt="NavyOrganic"/>
            },
            {
                id: 4,
                name: "Charcoal Muscle Fit T'Shirt",
                size: "L",
                color: "Blue",
                prijs: 5.2,
                image: <img src={CharcoalMuscleFitTShirt} alt="CharcoalMuscleFitTShirt"/>
            },
            {
                id: 5,
                name: "Navy Organic Raglan T'Shirt",
                size: "XL",
                color: "BLue",
                prijs: 3.7,
                image: <img src={NavyOrganicRaglanTShirt} alt="NavyOrganicRaglanTShirt"/>
            }
        ],
    },
    {
        name: "Polo",
        products: [
            {
                id: 1,
                name: "Jacquard Collar Polo",
                size: "XS",
                color: "Black",
                prijs: 6,
                image: <img src={JacquardCollarPolo} alt="JacquardCollarPolo"/>
            },
            {
                id: 2,
                name: "Ecru Stripe Polo Jumper",
                size: "S",
                color: "Ping",
                prijs: 15,
                image: <img src={EcruStripePoloJumper} alt="EcruStripePoloJumper"/>
            },
            {
                id: 3,
                name: "Navy Rib Zip Neck Polo",
                size: "M",
                color: "Red",
                prijs: 10.80,
                image: <img src={NavyRibZipNeckPolo} alt="NavyRibZipNeckPolo"/>
            }
        ],
    },
    {
        name: "Jeans",
        products: [
            {
                id: 1,
                name: "Strainght Mid Wash Jeans",
                size: "XS",
                color: "Brown",
                prijs: 21,
                image: <img src={StrainghtMidWashJeans} alt="StrainghtMidWashJeans"/>
            },
            {
                id: 2,
                name: "Skinny Roman Vintage Organic Jeans",
                size: "S",
                color: "Ping",
                prijs: 24.5,
                image: <img src={SkinnyRomanVintageOrganicJeans} alt="SkinnyRomanVintageOrganicJeans"/>
            },
            {
                id: 3,
                name: "Skinny HyperBlue Organic Jeans",
                size: "M",
                color: "Bleu",
                prijs: 10.80,
                image: <img src={SkinnyHyperBlueOrganicJeans} alt="SkinnyHyperBlueOrganicJeans"/>
            },
            {
                id: 4,
                name: "Slim fit Organic Jeans",
                size: "M",
                color: "black",
                prijs: 17.58,
                image: <img src={SlimfitOrganicJeans} alt="SlimfitOrganicJeans"/>
            }
        ]
    }
];
export const WOMEN_CLOTHING_DATA = [
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