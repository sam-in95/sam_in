import React from "react";

// import SiteButton from "../UI/SiteButton";
// import Header from "../Components/Header";
// import SubPortfolioInfo from "../UI/SubPortfolioInfo";
// import CategoriBox from "../UI/CategoriBox";
// import Footer from "../Components/Footer";

import "../fonts/fonts.css";
// import classes from "./Subpage.module.css";

import UdemyImg_1 from "./Page_images/Udmey_1.png";
import UdemyImg_2 from "./Page_images/Udmey_2.png";
import UdemyImg_3 from "./Page_images/Udmey_3.png";
import UdemyImg_4 from "./Page_images/Udmey_4.png";

const Udemy = () => {
  return (
    <div style={{ width: "100%", overflowY: "hidden" }}>
      <img src={UdemyImg_1} alt="1" style={{ marginTop: "0" }} />
      <img src={UdemyImg_2} alt="2" style={{ marginTop: "-4px" }} />
      <img src={UdemyImg_3} alt="3" style={{ marginTop: "-4px" }} />
      <img src={UdemyImg_4} alt="4" style={{ marginTop: "-4px" }} />
    </div>
  );
};

export default Udemy;
