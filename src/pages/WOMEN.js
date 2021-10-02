import React from "react";
import { WOMEN_CLOTHING_DATA } from "../data/data";

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

