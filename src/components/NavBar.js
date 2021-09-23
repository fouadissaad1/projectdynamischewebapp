import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { MEN } from "../pages/MEN";
import { WOMEN } from "../pages/WOMEN";
import { CHILDREN } from "../pages/CHILDREN";
import { Home } from "../pages/Home";

function NavBar() {
    const [open, setOpen]=useState(false);

    return (
        <Router>
            <div>

                <nav>
                    <div className="logo" onAnimationStart={onscroll}>Shopping</div>
                    <ul className="nav-links" style={{transform: open ? "translateX(0px)" :"translateX(-500px)"}}>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/MEN">MEN'S WEAR</Link>
                        </li>
                        <li>
                            <Link to="/WOMEN">WOMEN'S WEAR</Link>
                        </li>
                        <li>
                            <Link to="/CHILDREN">CHILDREN</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <i onClick={()=>setOpen(!open)} className="fas fa-bars burger"></i>

                </nav>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/MEN">
                        <MEN />
                    </Route>
                    <Route path="/WOMEN">
                        <WOMEN />
                    </Route>
                    <Route path="/CHILDREN">
                        <CHILDREN />
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default NavBar