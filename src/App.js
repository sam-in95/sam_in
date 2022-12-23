import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

import MouseCursor from "./UI/MouseCursor";

// page
import Main from "./Page/Main";
import Compose from "./Page/Compose";
import JejuDrink from "./Page/JejuDrink";
import Nespresso from "./Page/Nespresso";
import Dyson from "./Page/Dyson";
import SmoothieKing from "./Page/SmoothieKing";
import Notion from "./Page/Notion";
import CoupangEats from "./Page/CoupangEats";
import Petove from "./Page/Petove";
import Osigae from "./Page/Osigae";

import classes from "./App.module.css";
import "./reset.css";

function App(props) {
  return (
    <div className={classes.wrap} style={{ cursor: "none" }}>
      {/* <header className={classes.header}>
        <h1>sam portfolio</h1>
      </header> */}

      <MouseCursor />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/Compose" element={<Compose />}></Route>
          <Route path="/Nespresso" element={<Nespresso />}></Route>
          <Route path="/Dyson" element={<Dyson />}></Route>
          <Route path="/SmoothieKing" element={<SmoothieKing />}></Route>
          <Route path="/Notion" element={<Notion />}></Route>
          <Route path="/JejuDrink" element={<JejuDrink />}></Route>
          <Route path="/CoupangEats" element={<CoupangEats />}></Route>
          <Route path="/Petove" element={<Petove />}></Route>
          <Route path="/Osigae" element={<Osigae />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
