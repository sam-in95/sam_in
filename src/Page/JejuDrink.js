import React from "react";

import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import Footer from "../Components/Footer";

import "../fonts/fonts.css";
import classes from "./Subpage.module.css";

const JejuDrink = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Header bgColor=" " titleColor="#ffffff" />

      <div
        className={classes.subPageBanner}
        style={{
          background: "url(images/sub_jeju_info_banner.png)",
          width: "100%",
          height: "980px",
          margin: "0 auto",
        }}
      >
        <SubPortfolioInfo
          portfolioInfo="#fff"
          peroid="2021.09 ~ 2021.10"
          percent="100%"
          textPosition="584px 0 0 374px"
          PS=""
          AI="true"
          XD=""
          HTML=""
          CSS=""
          JS=""
        />
      </div>

      <section
        className={classes.subInfo}
        style={{ background: "#fff", height: "1470px", position: "relative" }}
      >
        <img
          src="images/jeju_info_box_1.png"
          style={{
            margin: "0 auto",
            display: "block",
            marginTop: "160px",
          }}
          alt="제주"
        />

        <div
          style={{
            position: "absolute",
            top: "310px",
            left: "1040px",
            color: "#fff",
          }}
        >
          <p style={{ fontFamily: "GmarketSansBold", fontSize: "36px" }}>
            overview
          </p>
          <p
            style={{
              fontFamily: "GmarketSansMedium",
              fontSize: "18px",
              lineHeight: "36px",
              marginTop: "50px",
            }}
          >
            최근 전통주, 증류소주 등의 술이 젊은 소비자층을 중심으로
            <br />
            인기몰이 중입니다. 일반적인 주류랑은 다르게 전통주는
            <br />
            인터넷 판매,구매가 가능하여 온라인 구매가 익숙한 젊은 세대가
            <br />
            소비 주체로 떠오른다는 분석이 있습니다.
            <br />
            그에 맞춰 제주 전통주를 홍보하는 인포그래픽입니다.
          </p>
        </div>
      </section>

      <Footer footerBottom="0" />
    </div>
  );
};

export default JejuDrink;
