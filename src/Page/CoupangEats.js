import React from "react";

import SiteButton from "../UI/SiteButton";
import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import Footer from "../Components/Footer";

import "../fonts/fonts.css";
import classes from "./Subpage.module.css";

const CoupangEats = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <Header bgColor=" " titleColor="#666666" />

      <div
        className={classes.subPageBanner}
        style={{
          background: "url(images/sub_coupangeats_banner.png)",
          width: "100%",
          height: "980px",
          margin: "0 auto",
        }}
      >
        <SubPortfolioInfo
          portfolioInfo="#222"
          peroid="2022.05 ~ 2022.06"
          percent="100%"
          textPosition="584px 0 0 374px"
          PS="true"
          AI="true"
          XD="true"
          HTML="true"
          CSS="true"
          JS="true"
        />

        <SiteButton
          btnColor="#47b3e2"
          textColor="#ffffff"
          width="150px"
          top="760px"
          left="370px"
          link="coupangeats/index.html"
        />
      </div>

      <Footer footerBottom="-200px" />
    </div>
  );
};

export default CoupangEats;
