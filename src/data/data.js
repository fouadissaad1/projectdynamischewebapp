import mijnFoto from "../images/teams/fouadIssaad.png";
import sofiFoto from "../images/teams/sofi.png";
import janFoto from "../images/teams/jan.png";
import nadiaFoto from "../images/teams/nadia.png";
import React from "react";

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