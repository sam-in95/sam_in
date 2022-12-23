import React from "react";

import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import Footer from "../Components/Footer";
import SiteButton from "../UI/SiteButton";

import "../fonts/fonts.css";
import classes from "./Petove.module.css";

const Petove = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1920px",
        height: "1800px",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <Header bgColor=" " titleColor="#666666" />

      <SubPortfolioInfo
        portfolioInfo="#222"
        peroid="2022.06 ~ 2022.09"
        percent="60%(기획, 촬영)"
        textPosition="160px 0 0 210px"
        PS="true"
        AI=""
        XD=""
        HTML=""
        CSS=""
        JS=""
        PR="true"
      />

      <iframe
        className={classes.frame}
        src="images/petove.pdf"
        height="800"
      ></iframe>

      <SiteButton
        width="452px"
        top="1300px"
        left="50%"
        transX="-50%"
        btnColor="#f20097"
        textColor="#fff"
        link="https://www.youtube.com/watch?v=Y1qaEd5THSA"
      />

      <Footer footerBottom="0" />
    </div>
  );
};

export default Petove;
