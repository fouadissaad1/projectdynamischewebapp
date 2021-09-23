
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
function Footer(props){
    return<p className="pFooterStyle"> © 2021 Belgium Country Clothing • Fouad ISSAAD{props.name}</p>
}
export default Footer;