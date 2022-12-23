import React from "react";

import SiteButton from "../UI/SiteButton";
import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import CategoriBox from "../UI/CategoriBox";
import Footer from "../Components/Footer";

import "../fonts/fonts.css";
import classes from "./Subpage.module.css";

const Dyson = () => {
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
        style={{
          background: "url(images/sub_dyson_banner.png)",
          width: "100%",
          height: "980px",
          margin: "0 auto",
        }}
      >
        <SubPortfolioInfo
          portfolioInfo="#fff"
          peroid="2022.04 ~ 2022.05"
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
          btnColor="#71ab4d"
          textColor="#ffffff"
          width="150px"
          top="760px"
          left="370px"
          link="dyson/index.html"
        />
      </div>

      <section className={classes.subInfo} style={{ background: "#ddd" }}>
        <div className={classes.subInfoContent}>
          <div
            className={classes.infoTitle}
            style={{ margin: "0 auto", paddingTop: "180px" }}
          >
            <div
              className={classes.infoLogo}
              style={{
                width: "182px",
                height: "70px",
                margin: "0 auto",
                background: "url(images/logo_dyson.png) no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <p
              style={{ textAlign: "center", marginTop: "38px", color: "#222" }}
            >
              다이슨은 1993년, 제임스 다이슨이 설립한 영국의 가전제품
              기업입니다.
              <br />
              세계 최초로 먼지봉투가 필요없는 백시르타입 진공청소기를 출시하며
              21세기 가전제품을 트렌드에
              <br />큰 영향을 준 회사로 평가됩니다.
            </p>
          </div>

          <div className={classes.subCategori} style={{ marginTop: "250px" }}>
            <p className={classes.subCategoriTitle} style={{ color: "#222" }}>
              POINT
            </p>
            <p className={classes.subCategoriText} style={{ color: "#222" }}>
              한국방송광고진흥공사의 소비자행태 조사를 보면 소비자들은 청소기를
              고를 때 성능을 우선시 하고 있습니다.
              <br />
              인구학적 특성으로 보면 주로 미혼, 직장인, 젊은층에게 인기가 있고
              그를 바탕으로 높은 점유율을 가지고 있습니다.
            </p>

            <div className={classes.categoriBoxes}>
              <div className={classes.categoriBoxesTop}>
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#ffffff"
                  BoxTitle="청소기 브랜드 선호도"
                  BoxTitleColor="#222"
                  BoxContent="images/dyson_box_1.png"
                  BoxContentWidth="211px"
                  BoxContentTop="60px"
                />
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#ffffff"
                  BoxTitle="선택시 고려할 사항"
                  BoxTitleColor="#222"
                  BoxContent="images/dyson_box_2.png"
                  BoxContentWidth="327px"
                  BoxContentTop="93px"
                />
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#ffffff"
                  BoxTitle="인구학적 특성별 구매율"
                  BoxTitleColor="#222"
                  BoxContent="images/dyson_box_3.png"
                  BoxContentWidth="326px"
                  BoxContentTop="145px"
                />
              </div>
              <div
                className={classes.categoriBoxesBottom}
                style={{ marginTop: "120px" }}
              >
                <CategoriBox
                  BoxWidth="1412px"
                  BoxHeight="492px"
                  BoxBackground="#ffffff"
                  BoxTitle="TARGET"
                  BoxTitleTop="70px"
                  BoxTitleFont="GmarketSansBold"
                  BoxTitleSize="36px"
                  BoxTitleColor="#71AB4D"
                  BoxContent="images/dyson_box_4.png"
                  BoxContentWidth="870px"
                  BoxContentTop="30px"
                />
              </div>
            </div>
          </div>

          <div
            className={classes.subCategori}
            style={{ marginTop: "250px", paddingBottom: "250px" }}
          >
            <p className={classes.subCategoriTitle} style={{ color: "#222" }}>
              STYLE GUIDE
            </p>
            <p className={classes.subCategoriText} style={{ color: "#222" }}>
              다이슨의 기술력을 어필하기 위해 그레이톤을 주로 사용하였고, 주력
              제품 레이저의 색을 가져와 포인트를 주었습니다.
            </p>

            <div className={classes.categoriBoxes}>
              <div className={classes.categoriBoxesTop}>
                <CategoriBox
                  BoxWidth="812px"
                  BoxHeight="615px"
                  BoxBackground="#fff"
                  BoxTitle="COLOR"
                  BoxTitleColor="#222"
                  BoxContent="images/dyson_box_5.png"
                  BoxContentWidth="538px"
                  BoxContentTop="100px"
                />
                <CategoriBox
                  BoxWidth="572px"
                  BoxHeight="615px"
                  BoxBackground="#ffffff"
                  BoxTitle="TYPOGRAPHY"
                  BoxTitleColor="#222"
                  BoxContent="images/dyson_box_6.png"
                  BoxContentWidth="292px"
                  BoxContentTop="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={classes.showPage}
        style={{ background: "#fff", height: "2860px", position: "relative" }}
      >
        <div className={classes.showPageContent}>
          <div
            className={classes.showPageCategori}
            style={{
              height: "2170px",
              paddingTop: "150px",
              position: "relative",
            }}
          >
            <p
              className={classes.showPageCategoriTitle}
              style={{ color: "#71AB4D" }}
            >
              MAIN
            </p>

            <img
              src="images/dyson_main_capture.png"
              style={{
                width: "812px",
                position: "absolute",
                top: "220px",
                right: "0",
              }}
              alt="다이슨 메인"
            />
          </div>

          <SiteButton
            btnColor="#71ab4d"
            textColor="#ffffff"
            position="absolute"
            width="452px"
            left="50%"
            transX="-50%"
            link="dyson/index.html"
          />
        </div>
      </section>

      <Footer footerBottom="0" />
    </div>
  );
};

export default Dyson;
