import './App.css';
import NavBar from "./components/NavBar";
import React from "react";
import Footer from "./components/Footer";



function App() {
  return (
    <div >
      <div>
       <NavBar/>
      </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  );
}

export default App;
