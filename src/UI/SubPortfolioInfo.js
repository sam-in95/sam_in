import React from "react";

import classes from "./SubPortfolioInfo.module.css";

const SubPortfolioInfo = (props) => {
  return (
    <div
      className={classes.subBannerText}
      style={{ margin: `${props.textPosition}` }}
    >
      <div
        className={classes.subBannerTextLeft}
        style={{ color: `${props.portfolioInfo}` }}
      >
        <p>작업기간</p>
        <p>기여도</p>
        <p>사용 프로그램</p>
      </div>
      <div
        className={classes.subBannerTextRight}
        style={{ color: `${props.portfolioInfo}` }}
      >
        <p>{props.peroid}</p>
        <p>{props.percent}</p>
        <div className={classes.subBannerTools}>
          <p
            style={{
              background: "url(images/icon_photoshop.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.PS ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_illustrator.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.AI ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_xd.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.XD ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_html5.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.HTML ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_css3.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.CSS ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_javascript.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.JS ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_premierepro.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.PR ? "block" : "none"}`,
            }}
          ></p>
          <p
            style={{
              background: "url(images/icon_figma.png) no-repeat",
              backgroundSize: "100%",
              display: `${props.FG ? "block" : "none"}`,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default SubPortfolioInfo;
