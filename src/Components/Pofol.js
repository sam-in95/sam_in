import React from "react";
import { Link } from "react-router-dom";

import classes from "./Pofol.module.css";

const Pofol = (props) => {
  return (
    <ul className={classes.pofol_wrap}>
      {props.items.map((pofol) => (
        <li
          className={classes.pofol_item}
          key={pofol.id}
          type={pofol.type}
          data-cursor="pofol"
          data-text="view"
        >
          <Link to={`${pofol.link}`}>
            <p className={classes.pofolCategori}>{pofol.type}</p>
            <p className={classes.pofolTitle}>{pofol.text}</p>
            <img src={`images/img_${pofol.imgText}.png`} alt="이미지" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pofol;
