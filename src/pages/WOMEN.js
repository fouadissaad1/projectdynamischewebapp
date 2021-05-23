import React from "react";


const WOMEN_CLOTHING_DATA=[
    {
        name: "Dreses",
        womenProduts:[
            {name:"Floral Patterned Knit Dres",size:"L",color:"Yellow",prijs:15.99},
            {name:"Floral Patterned Knit Dres",size:"L",color:"blue",prijs:15.99},
            {name:"Patterned off Shoulder Dres",size:"L",color:"White",prijs:29.99},

        ],

    },
    {
        name: "jeans",
        womenProduts:[
            {name:"Wide Leg Fit Extra High Waist Dirty jeans",size:"XS",color:"black",prijs:19.9},
            {name:"Two-Tone Mom Fit Jeans jeans",size:"L",color:"Bleu",prijs:19.9},
            {name:"Mom Fit Extra High Waist Jeans",size:"M",color:"Bleu",prijs:29.9},
            {name:"Mom Fit Extra High Waist jeans",size:"S",color:"black",prijs:24.99},

        ],

    },
    {
        name: "jackets",
        womenProduts:[
            {name:"Dreses",size:"L",color:"Yellow",prijs:9.9},
        ],

    }

];
function Category(props){
    const {category}=props;
    return <div>
        <h3>{category.name}</h3>
        {
            category.womenProduts.map((p)=><Women key={p.name} women={p}/>)
        }
    </div>
}
function Women(props){
    const{women}= props;
    return<div>
        <div className="tshirtman"><h3>{women.name}</h3></div>
        <div className="tshirtman">size: {women.size}</div>
        <div className="tshirtman">color: {women.color}</div>
        <div className="tshirtman">prijs: {women.prijs}&euro;</div>

    </div>
}
export function WOMEN() {
    return (
        <div>
            <h2>Women</h2>
            <div>
                {
                    WOMEN_CLOTHING_DATA.map((c,i)=><Category category={c} key={i}/>)
                }
            </div>
        </div>
    );
}

