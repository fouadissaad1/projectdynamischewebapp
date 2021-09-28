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