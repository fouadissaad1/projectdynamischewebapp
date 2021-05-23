import React from "react";
//import t-shrit images
import MuscleTshirt from '../images/clothting/man/tshirt/MuscleTShirt.jpg';
import NavyOrganic from '../images/clothting/man/tshirt/NavyOrganic.jpg';
import CharcoalMuscleFitTShirt from '../images/clothting/man/tshirt/CharcoalMuscleFitTShirt.jpg';
import NavyOrganicRaglanTShirt from '../images/clothting/man/tshirt/NavyOrganicRaglanTShirt.jpg';
import GrandadTShirt from '../images/clothting/man/tshirt/GrandadTShirt.jpg';
//import Polo images
import JacquardCollarPolo from '../images/clothting/man/Polo/JacquardCollarPolo.jpeg';
import EcruStripePoloJumper from '../images/clothting/man/Polo/EcruStripePoloJumper.jpg';
import NavyRibZipNeckPolo from '../images/clothting/man/Polo/NavyRibZipNeckPolo.jpg';
//import Jeans images
import StrainghtMidWashJeans from'../images/clothting/man/jeans/StrainghtMidWashJeans.jpg';
import SkinnyRomanVintageOrganicJeans from'../images/clothting/man/jeans/SkinnyRomanVintageOrganicJeans.jpg';
import SkinnyHyperBlueOrganicJeans from '../images/clothting/man/jeans/SkinnyHyperBlueOrganicJeans.jpg';
import SlimfitOrganicJeans from '../images/clothting/man/jeans/SlimfitOrganicJeans.jpg';

//database clothing man
const MEN_CLOTHING_DATA=[
    {
        name:"T'Shirt",
        products: [
            {id:1, name:"Muscle T'Shirt",size:"XS",color:"Brown",prijs:4.8,image: <img src={MuscleTshirt} alt="MuscleTshirt"/>},
            {id:2,name:"Grandad T'Shirt",size:"S",color:"Ping",prijs:5,image: <img src={GrandadTShirt} alt="GrandadTShirt"/>},
            {id:3,name:"Navy Organic T'Shirt",size:"M",color:"Red",prijs:3.6,image:  <img src={NavyOrganic}  alt="NavyOrganic"/>},
            {id:4,name:"Charcoal Muscle Fit T'Shirt",size:"L",color:"Blue",prijs:5.2,image: <img src={CharcoalMuscleFitTShirt} alt="CharcoalMuscleFitTShirt"/>},
            {id:5,name:"Navy Organic Raglan T'Shirt",size:"XL",color:"BLue",prijs:3.7,image: <img src={NavyOrganicRaglanTShirt}  alt="NavyOrganicRaglanTShirt"/>}
        ],
    },
    {
        name:"Polo",
        products: [
            {id:1,name:"Jacquard Collar Polo",size:"XS",color:"Black",prijs:6,image: <img src={JacquardCollarPolo} alt="JacquardCollarPolo"/>},
            {id:2,name:"Ecru Stripe Polo Jumper",size:"S",color:"Ping",prijs:15,image: <img src={EcruStripePoloJumper} alt="EcruStripePoloJumper" />},
            {id:3,name:"Navy Rib Zip Neck Polo",size:"M",color:"Red",prijs:10.80,image: <img src={NavyRibZipNeckPolo} alt="NavyRibZipNeckPolo"/>}
        ],
    },
    {
        name:"Jeans",
        products: [
            {id:1,name:"Strainght Mid Wash Jeans",size:"XS",color:"Brown",prijs:21, image: <img src={StrainghtMidWashJeans} alt="StrainghtMidWashJeans"/>},
            {id:2,name:"Skinny Roman Vintage Organic Jeans",size:"S",color:"Ping",prijs:24.5, image: <img src={SkinnyRomanVintageOrganicJeans} alt="SkinnyRomanVintageOrganicJeans"/>},
            {id:3,name:"Skinny HyperBlue Organic Jeans",size:"M",color:"Bleu",prijs:10.80, image: <img src={SkinnyHyperBlueOrganicJeans} alt="SkinnyHyperBlueOrganicJeans"/>},
            {id:4,name:"Slim fit Organic Jeans",size:"M",color:"black",prijs:17.58, image: <img src={SlimfitOrganicJeans} alt="SlimfitOrganicJeans"/>}
        ]
    }
];

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
    return <div  className="container">

        <div className="manStyle">
            <br/><br/><br/><br/>
            <h3 >{man.name}</h3>
            <p className="pMenStyle">size: {man.size} </p>
            <p className="pMenStyle">color: {man.color}</p>
           <p className="pMenStyle">how much: {man.prijs}&euro;</p>

            <form>
                <label>
                    how much:
                    <input type="number"  name="name" />
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
        </div >
        <div className="manStyle">{man.image}</div>
        <div></div>



    </div>
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