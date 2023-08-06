import logo from "./logo.svg";
import "./App.css";
import Navbar from "./compornant/Navbar";
import Hero from "./compornant/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./compornant/Footer";

function App() {
  return (
    <>
    
<div className="overflow-x-hidden" >
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
  
        <Footer />
      </Router>
</div>      
    </>
  );
}

export default App;
