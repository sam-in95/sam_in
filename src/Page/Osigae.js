import React from "react";

import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import Footer from "../Components/Footer";
import SiteButton from "../UI/SiteButton";

import "../fonts/fonts.css";
import classes from "./Petove.module.css";

const Osigae = () => {
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
        peroid="2022.09 ~ 2022.12"
        percent="60%(기획, 디자인)"
        textPosition="160px 0 0 210px"
        PS="true"
        AI="true"
        XD=""
        HTML=""
        CSS=""
        JS=""
        PR=""
        FG="true"
      />

      <iframe
        className={classes.frame}
        src="images/osigae.pdf"
        height="800"
      ></iframe>

      <SiteButton
        width="452px"
        top="1300px"
        left="50%"
        transX="-50%"
        btnColor="#ee4f10"
        textColor="#fff"
        link="https://www.figma.com/proto/A9bXYhsl71NEXyWsgseIuD/%EC%98%A4%EC%8B%9C%EA%B0%9C-%EC%B5%9C%EC%A2%85?node-id=242%3A3378&scaling=scale-down&page-id=0%3A1&starting-point-node-id=242%3A3367"
      />

      <Footer footerBottom="0" />
    </div>
  );
};

export default Osigae;
