import React from "react";

import SiteButton from "../UI/SiteButton";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import classes from "./Compose.module.css";

const Compose = () => {
  return (
    <div className={classes.wrap}>
      <Header bgColor=" " titleColor="#666666" />

      <SiteButton
        className={classes.composeBtn}
        btnColor="#fdd901"
        textColor="#856b6b"
        width="150px"
        top="775px"
        left="370px"
        link="https://xd.adobe.com/view/73da3966-a0dd-4e2d-a282-e3ab42d81e9c-2689/?fullscreen&hints=off"
      />

      <Footer footerTop="10567px" />
      <img src="images/compose_coffee.png" alt="컴포즈커피" />
    </div>
  );
};

export default Compose;
