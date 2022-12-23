import React from "react";

import "../fonts/fonts.css";

const SiteButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: `${props.btnColor}`,
        color: `${props.textColor}`,
        width: `${props.width}`,
        height: "40px",
        top: `${props.top}`,
        left: `${props.left}`,
        borderRadius: "10px",
        border: "none",
        position: "absolute",
        transform: `translateX(${props.transX})`,
        bottom: "500px",
      }}
    >
      <a href={props.link} target="_blank">
        <p style={{ fontFamily: "GmarketSansBold", fontSize: "14px" }}>
          SITE VIEW
        </p>
      </a>
    </button>
  );
};

export default SiteButton;
