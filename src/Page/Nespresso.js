import React from "react";

import SiteButton from "../UI/SiteButton";
import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import CategoriBox from "../UI/CategoriBox";
import Footer from "../Components/Footer";

import "../fonts/fonts.css";
import classes from "./Subpage.module.css";

const Nespresso = () => {
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
          background: "url(images/sub_nespresso_banner.png)",
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
          btnColor="#d3391a"
          textColor="#ffffff"
          width="150px"
          top="760px"
          left="370px"
          link="nespresso/index.html"
        />
      </div>

      <section className={classes.subInfo} style={{ background: "#333333" }}>
        <div className={classes.subInfoContent}>
          <div
            className={classes.infoTitle}
            style={{ margin: "0 auto", paddingTop: "180px" }}
          >
            <div
              className={classes.infoLogo}
              style={{
                width: "218px",
                height: "45px",
                margin: "0 auto",
                background: "url(images/logo_nespresso.png) no-repeat",
              }}
            ></div>
            <p
              style={{ textAlign: "center", marginTop: "38px", color: "#fff" }}
            >
              네스프레소는 1980년대 유럽시장에서 처음 소개된 '네슬레'의 캡슐커피
              브랜드입니다.
              <br />
              현재 캡슐의 특허가 만료되어 다양한 브랜드에서 호환캡슐이 출시되고
              있습니다.
            </p>
          </div>

          <div className={classes.subCategori} style={{ marginTop: "250px" }}>
            <p className={classes.subCategoriTitle} style={{ color: "#fff" }}>
              POINT
            </p>
            <p className={classes.subCategoriText} style={{ color: "#fff" }}>
              한국소비자원에 따르면 네스프레소는 캡슐커피 시장에서 58%의
              점유율을 가지고 있으며 소비자들은 편리함 때문에
              <br />
              캡슐커피를 선택했으며 브랜드를 선택함에 있어 맛을 가장 중요하게
              생각합니다.
              <br />
              그리고 캡슐 호환 문제가 가장 큰 불만이라고 말하고 있습니다.
            </p>

            <div className={classes.categoriBoxes}>
              <div className={classes.categoriBoxesTop}>
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#262626"
                  BoxTitle="네스프레소 시장 점유율"
                  BoxTitleColor="#fff"
                  BoxContent="images/nespresso_box_1.png"
                  BoxContentWidth="212px"
                  BoxContentTop="120px"
                />
                <CategoriBox
                  BoxWidth="932px"
                  BoxHeight="456px"
                  BoxBackground="#262626"
                  BoxTitle="캡슐커피 시장 현황"
                  BoxTitleColor="#fff"
                  BoxContent="images/nespresso_box_2.png"
                  BoxContentWidth="692px"
                  BoxContentTop="120px"
                />
              </div>
              <div
                className={classes.categoriBoxesBottom}
                style={{ marginTop: "28px" }}
              >
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#262626"
                  BoxTitle="캡슐커피 불만 유형"
                  BoxTitleColor="#fff"
                  BoxContent="images/nespresso_box_3.png"
                  BoxContentWidth="212px"
                  BoxContentTop="120px"
                />
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#262626"
                  BoxTitle="캡슐커피 선택 이유"
                  BoxTitleColor="#fff"
                  BoxContent="images/nespresso_box_4.png"
                  BoxContentWidth="307px"
                  BoxContentTop="170px"
                />
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#262626"
                  BoxTitle="캡슐커피 브랜드 선택 이유"
                  BoxTitleColor="#fff"
                  BoxContent="images/nespresso_box_5.png"
                  BoxContentWidth="295px"
                  BoxContentTop="170px"
                />
              </div>
            </div>
          </div>

          <div
            className={classes.subCategori}
            style={{ marginTop: "250px", paddingBottom: "250px" }}
          >
            <p className={classes.subCategoriTitle} style={{ color: "#fff" }}>
              STYLE GUIDE
            </p>
            <p className={classes.subCategoriText} style={{ color: "#fff" }}>
              네스프레소의 고급스러운 이미지를 부각시키기 위해 블랙 테마를
              선택하였고,
              <br /> 커피의 브라운 컬러로 부드러움을, 생원두의 레드컬러로
              포인트를 주었습니다.
            </p>

            <div className={classes.categoriBoxesTop}>
              <CategoriBox
                BoxWidth="813px"
                BoxHeight="615px"
                BoxBackground="#262626"
                BoxTitle="COLOR"
                BoxTitleColor="#fff"
                BoxContent="images/nespresso_box_6.png"
                BoxContentWidth="538px"
                BoxContentTop="160px"
              />
              <CategoriBox
                BoxWidth="574px"
                BoxHeight="615px"
                BoxBackground="#262626"
                BoxTitle="TYPOGRAPHY"
                BoxTitleColor="#fff"
                BoxContent="images/nespresso_box_7.png"
                BoxContentWidth="292px"
                BoxContentTop="160px"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={classes.showPage}
        style={{ background: "#000", height: "8635px", position: "relative" }}
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
              style={{ color: "#d72829" }}
            >
              MAIN
            </p>

            <img
              src="images/nespresso_main_capture.png"
              style={{
                width: "812px",
                position: "absolute",
                top: "220px",
                right: "0",
              }}
              alt="네스프레소 메인"
            />
          </div>

          <div
            className={classes.showPageCategori}
            style={{
              height: "2200px",
              marginTop: "450px",
              position: "relative",
            }}
          >
            <p
              className={classes.showPageCategoriTitle}
              style={{ color: "#d72829" }}
            >
              SUB
            </p>
            <p
              className={classes.showPageCategoriText}
              style={{ color: "#d72829" }}
            >
              캡슐
            </p>

            <img
              src="images/nespresso_sub_1_capture.png"
              style={{
                width: "812px",
                position: "absolute",
                top: "160px",
                right: "0",
              }}
              alt="네스프레소 서브"
            />
          </div>

          <div
            className={classes.showPageCategori}
            style={{
              height: "2570px",
              marginTop: "450px",
              position: "relative",
            }}
          >
            <p
              className={classes.showPageCategoriTitle}
              style={{ color: "#d72829" }}
            >
              SUB
            </p>
            <p
              className={classes.showPageCategoriText}
              style={{ color: "#d72829" }}
            >
              캡슐 상세페이지
            </p>

            <img
              src="images/nespresso_sub_2_capture.png"
              style={{
                width: "812px",
                position: "absolute",
                top: "160px",
                right: "0",
                display: "block",
              }}
              alt="네스프레소 서브"
            />
          </div>

          <SiteButton
            btnColor="#d3391a"
            textColor="#ffffff"
            position="absolute"
            width="452px"
            left="50%"
            transX="-50%"
            link="nespresso/index.html"
          />
        </div>
      </section>

      <Footer footerBottom="0" footerTitleColor="#fff" />
    </div>
  );
};

export default Nespresso;
