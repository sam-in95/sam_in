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
        backgroundColor: `${props.bgColor}`,
      }}
    >
      <a href="http://sam-in.com">
        <h1
          style={{
            width: "200px",
            fontFamily: "GmarketSansBold",
            fontSize: "24px",
            textAlign: "center,",
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
