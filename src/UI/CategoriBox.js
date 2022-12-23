import React from "react";

import "../fonts/fonts.css";

const CategoriBox = (props) => {
  return (
    <div
      style={{
        width: `${props.BoxWidth}`,
        height: `${props.BoxHeight}`,
        borderRadius: "50px",
        background: `${props.BoxBackground}`,
        position: "relative",
      }}
    >
      <p
        style={{
          fontFamily: `${
            props.BoxTitleFont ? props.BoxTitleFont : "GmarketSansMedium"
          }`,
          fontSize: `${props.BoxTitleSize ? props.BoxTitleSize : "18px"}`,
          textAlign: "center",
          color: `${props.BoxTitleColor}`,
          paddingTop: `${props.BoxTitleTop ? props.BoxTitleTop : "40px"}`,
        }}
      >
        {props.BoxTitle}
      </p>

      <img
        src={`${props.BoxContent}`}
        style={{
          width: `${props.BoxContentWidth}`,
          display: "block",
          position: "absolute",
          marginTop: `${props.BoxContentTop}`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        alt=""
      />
    </div>
  );
};

export default CategoriBox;
