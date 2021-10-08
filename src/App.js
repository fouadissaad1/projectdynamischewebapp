import React from "react";
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";



function App() {
  return (
    <div >
      <div>
<NavBar/>
      </div>
        <div>
            <Home/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  );
}

export default App;
