import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mail from "./components/Mail";
import Steps from "./components/Steps";

function App() {
  const secureToken = process.env.REACT_APP_SECURE_TOKEN;

  return (
    <>
    <Navbar />
    <Home />
    <Mail secureToken={secureToken} sender="tmohamedaashir@gmail.com"/>
    <Steps />
    <Footer />
    </>
  );
}

export default App;
