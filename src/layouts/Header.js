import React from "react";
import { Route } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = () => {
  return (
    <>
      <Route path="/" exact render={() => <img src={img1} alt="home" />} />
      <Route
        path="/products"
        render={() => <img src={img1} alt="produkty" />}
      />
      <Route path="/contact" render={() => <img src={img2} alt="kontakt" />} />
      <Route
        path="/admin"
        render={() => <img src={img3} alt="panel admina" />}
      />
    </>
  );
};

export default Header;
