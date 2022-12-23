import React from "react";

import SiteButton from "../UI/SiteButton";
import Header from "../Components/Header";
import SubPortfolioInfo from "../UI/SubPortfolioInfo";
import CategoriBox from "../UI/CategoriBox";
import Footer from "../Components/Footer";

import "../fonts/fonts.css";
import classes from "./Subpage.module.css";

const SmoothieKing = () => {
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
        style={{
          background: "url(images/sub_smoothieking_banner.png)",
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
          btnColor="#e35c5b"
          textColor="#ffffff"
          width="150px"
          top="760px"
          left="370px"
          link="smoothieking/index.html"
        />
      </div>

      <section className={classes.subInfo} style={{ background: "#fff" }}>
        <div className={classes.subInfoContent}>
          <div
            className={classes.infoTitle}
            style={{ margin: "0 auto", paddingTop: "180px" }}
          >
            <div
              className={classes.infoLogo}
              style={{
                width: "172px",
                height: "129px",
                margin: "0 auto",
                background: "url(images/logo_smoothieking.png) no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <p
              style={{ textAlign: "center", marginTop: "38px", color: "#222" }}
            >
              스무디킹은 1973년 미국 뉴올리언스에서 시작된 최초의
              스무디브랜드입니다.
              <br />
              칼로리는 낮고 영양학적으로 균형잡힌 먹거리를 연구하여 과일에
              비타민, 미네랄 등 영양소를 첨가한 스무디를
              <br />
              최초로 개발하고 40년 이상 시장에서 최고의 시장점유율을 기록하고
              있습니다.
            </p>
          </div>

          <div className={classes.subCategori} style={{ marginTop: "250px" }}>
            <p
              className={classes.subCategoriTitle}
              style={{ color: "#E35C5B" }}
            >
              POINT
            </p>
            <p className={classes.subCategoriText} style={{ color: "#222" }}>
              기존 짧고 딱딱한 메인 페이지보다 상큼한 이미지를 주고자
              리뉴얼했습니다. 스무디음료 특성상 여름에 매출이 몰려있습니다.
              <br />
              겨울에도 매출을 올리기 위해 시원함 보다는 상큼함 쪽으로
              리뉴얼했습니다. 현재 음료 시장 트랜드에 맞춰 건강과 유기능올
              어필했습니다.
            </p>

            <div className={classes.categoriBoxes}>
              <div className={classes.categoriBoxesTop}>
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#F9F9F9"
                  BoxTitle="계졀 별 매출"
                  BoxTitleColor="#9A9897"
                  BoxContent="images/smoothieking_box_1.png"
                  BoxContentWidth="336px"
                  BoxContentTop="110px"
                />
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="240px"
                  BoxBackground="#f9f9f9"
                  BoxTitle=""
                  BoxTitleColor="#9A9897"
                  BoxContent="images/smoothieking_box_2.png"
                  BoxContentWidth="170px"
                  BoxContentTop="30px"
                />
                <CategoriBox
                  BoxWidth="452px"
                  BoxHeight="456px"
                  BoxBackground="#f9f9f9"
                  BoxTitle="음료시장 트랜드"
                  BoxTitleColor="#9A9897"
                  BoxContent="images/smoothieking_box_3.png"
                  BoxContentWidth="308px"
                  BoxContentTop="82px"
                />
              </div>
              <div
                className={classes.categoriBoxesBottom}
                style={{ marginTop: "120px" }}
              >
                <CategoriBox
                  BoxWidth="1412px"
                  BoxHeight="492px"
                  BoxBackground="#fffef1"
                  BoxTitle="TARGET"
                  BoxTitleTop="70px"
                  BoxTitleFont="GmarketSansBold"
                  BoxTitleSize="36px"
                  BoxTitleColor="#E35C5B"
                  BoxContent="images/smoothieking_box_4.png"
                  BoxContentWidth="769px"
                  BoxContentTop="30px"
                />
              </div>
            </div>
          </div>

          <div
            className={classes.subCategori}
            style={{ marginTop: "250px", paddingBottom: "250px" }}
          >
            <p
              className={classes.subCategoriTitle}
              style={{ color: "#E35C5B" }}
            >
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
                  BoxBackground="#f9f9f9"
                  BoxTitle="COLOR"
                  BoxTitleColor="#222"
                  BoxContent="images/smoothieking_box_5.png"
                  BoxContentWidth="538px"
                  BoxContentTop="100px"
                />
                <CategoriBox
                  BoxWidth="572px"
                  BoxHeight="615px"
                  BoxBackground="#f9f9f9"
                  BoxTitle="TYPOGRAPHY"
                  BoxTitleColor="#222"
                  BoxContent="images/smoothieking_box_6.png"
                  BoxContentWidth="328px"
                  BoxContentTop="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={classes.showPage}
        style={{
          background: "#fffef1",
          height: "3660px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className={classes.showPageContent}>
          <div
            className={classes.showPageCategori}
            style={{
              height: "3660px",
              paddingTop: "150px",
              position: "relative",
            }}
          >
            <p
              className={classes.showPageCategoriTitle}
              style={{ color: "#E35C5B" }}
            >
              MAIN
            </p>

            <img
              src="images/smoothieking_main_capture.png"
              style={{
                width: "812px",
                position: "absolute",
                top: "220px",
                right: "0",
              }}
              alt="스무디킹 메인"
            />
          </div>

          <SiteButton
            btnColor="#E35C5B"
            textColor="#ffffff"
            position="absolute"
            width="452px"
            left="50%"
            transX="-50%"
            link="smoothieking/index.html"
          />
        </div>
      </section>

      <Footer footerBottom="0" />
    </div>
  );
};

export default SmoothieKing;
