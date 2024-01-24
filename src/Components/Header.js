import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: "2",
        textAlign: "right",
        backgroundColor: `${props.bgColor}`,
      }}
    >
      <a
        href="http://sam-in.com"
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            width: "200px",
            fontFamily: "GmarketSansBold",
            fontSize: "24px",
            textAlign: "center",
            alignItems: "center",
            color: `${props.titleColor}`,
          }}
        >
          sam portfolio
        </h1>
      </a>
    </header>
  );
};

export default Header;
