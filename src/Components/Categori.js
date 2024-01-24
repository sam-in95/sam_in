import React, { useState, useRef } from "react";

import classes from "./Categori.module.css";

const Categori = (props) => {
  const cateType = [
    { text: "ALL", id: "1", type: "ALL", className: `${classes.btnOn}` },
    { text: "UI/UX", id: "2", type: "UXUI" },
    { text: "WEB", id: "3", type: "WEB" },
    { text: "ETC", id: "4", type: "ETC" },
  ];

  const filterHandler = (e) => {
    props.filter(e.target.type);
  };

  const liBtn = document.querySelectorAll(".liBtn");

  const btnOnHandler = (e) => {
    liBtn.forEach((btn) => {
      btn.classList.remove(`${classes.btnOn}`);
    });
    e.target.classList.add(`${classes.btnOn}`);
  };

  return (
    <div className={classes.categori}>
      <ul>
        {cateType.map((cate) => (
          <li
            key={cate.id}
            type={cate.type}
            className="liBtn"
            onClick={(e) => {
              filterHandler(e);
              btnOnHandler(e);
            }}
          >
            {cate.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categori;
