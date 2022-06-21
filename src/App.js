import React from "react";
import NavMenu from "./Components/NavMenu";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import ScrollTop from "./Components/ScrollTop";
import "../src/App.css"

function App() {
  return (
    <div>

      <Router>
      <NavMenu/>
      <ScrollTop/>
      <Routes>
        <Route  exact path="/"   element={<Home />}     />
        <Route  path="/about"    element={<About />}    />
        <Route  path="/work"     element={<Work />}     />
        <Route  path="/contact"  element={<Contact />}  />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
