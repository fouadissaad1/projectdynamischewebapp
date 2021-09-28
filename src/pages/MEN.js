import React from "react";
import { MEN_CLOTHING_DATA } from "../data/data";


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