import React from "react";

// import SiteButton from "../UI/SiteButton";
// import Header from "../Components/Header";
// import SubPortfolioInfo from "../UI/SubPortfolioInfo";
// import CategoriBox from "../UI/CategoriBox";
// import Footer from "../Components/Footer";

import "../fonts/fonts.css";
// import classes from "./Subpage.module.css";

import TodayWhiskyImg_1 from "./Page_images/Today_Whisky_1.png";
import TodayWhiskyImg_2 from "./Page_images/Today_Whisky_2.png";
import TodayWhiskyImg_3 from "./Page_images/Today_Whisky_3.png";

const Today_Whisky = () => {
  return (
    <div style={{ width: "100%", overflowY: "hidden" }}>
      <img src={TodayWhiskyImg_1} alt="1" style={{ marginTop: "0" }} />
      <img src={TodayWhiskyImg_2} alt="2" style={{ marginTop: "-4px" }} />
      <img src={TodayWhiskyImg_3} alt="3" style={{ marginTop: "-4px" }} />
    </div>
  );
};

export default Today_Whisky;
