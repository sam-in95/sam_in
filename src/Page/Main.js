import React, { useState } from "react";

import BannerStar from "../Components/BannerStar";
import DoorSVG from "../Components/DoorSVG";
import SectionTitle from "../UI/SectionTitle";
import Categori from "../Components/Categori";
import Pofol from "../Components/Pofol";
import ResumeSubTitle from "../UI/ResumeSubTitle";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../fonts/fonts.css";
import classes from "./Main.module.css";
import { useEffect } from "react";

const Main = (props) => {
  const [scrollPosition, setPosition] = useState(0);

  const [fixPosition, setFixPosition] = useState(true);

  const onScroll = () => {
    setPosition(window.scrollY);
    if (window.scrollY > 1800) {
      setFixPosition(false);
    } else {
      setFixPosition(true);
    }
    console.log(window.scrollY, fixPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [pofol, setPofol] = useState([
    {
      text: "COMPOSE COFFEE",
      imgText: "compose_coffee",
      id: "1",
      type: "UXUI",
      link: "/Compose",
    },
    {
      text: "NESPRESSO",
      imgText: "nespresso",
      id: "2",
      type: "WEB",
      link: "/Nespresso",
    },
    {
      text: "DYSON",
      imgText: "dyson",
      id: "3",
      type: "WEB",
      link: "/Dyson",
    },
    {
      text: "SMOOTHIE KING",
      imgText: "smoothie_king",
      id: "4",
      type: "WEB",
      link: "/SmoothieKing",
    },
    {
      text: "NOTION",
      imgText: "notion",
      id: "5",
      type: "WEB",
      link: "/Notion",
    },
    {
      text: "제주 전통주 인포그래픽",
      imgText: "jeju_drink",
      id: "6",
      type: "ILLUSTRATION",
      link: "/JejuDrink",
    },
    {
      text: "쿠팡이츠 랜딩페이지 제작",
      imgText: "coupang",
      id: "7",
      type: "WEB",
      link: "/CoupangEats",
    },
    {
      text: "펫토브 영상 광고 제작",
      imgText: "petove",
      id: "8",
      type: "BRANDING",
      link: "/Petove",
    },
    {
      text: "폐교 활용 방안",
      imgText: "osigae",
      id: "9",
      type: "UXUI",
      link: "/Osigae",
    },
  ]);

  const [selectCate, setSelectCate] = useState("ALL");

  let categoriSelect = (value) => {
    setSelectCate(value);
  };

  const filterPofol = pofol.filter((type) => {
    if (selectCate === "ALL") {
      return pofol;
    } else if (selectCate === "ETC") {
      return type.type === "ILLUSTRATION" && "BRANDING";
    } else {
      return type.type === selectCate;
    }
  });

  return (
    <div className={classes.wrap}>
      <Header bgColor=" " titleColor="#ffffff" />

      <section className={classes.banner}>
        <p
          className={classes.title}
          data-cursor="name"
          data-name="name"
          style={{
            fontSize: `${scrollPosition / 600 + 5}rem`,
            display: `${fixPosition ? "block" : "none"}`,
          }}
        >
          SAM - IN
        </p>

        <DoorSVG maxPosition={scrollPosition} visiblePosition={fixPosition} />

        <div className={classes.scroll_mouse}>
          <div className={classes.mouse}></div>
          <div className={classes.scroll}></div>
        </div>
      </section>

      <BannerStar />

      <section className={classes.hello}>
        <p
          className={classes.hello_1}
          style={{ transform: `translateX(${-scrollPosition + 2500}px)` }}
        >
          HOLA
        </p>
        <p
          className={classes.hello_2}
          style={{ transform: `translateX(${scrollPosition - 2900}px)` }}
        >
          안녕하세요
        </p>
        <p
          className={classes.hello_3}
          style={{ transform: `translateX(${-scrollPosition + 2500}px)` }}
        >
          포트폴리오에 방문해주신 여러분
        </p>
        <p
          className={classes.hello_4}
          style={{ transform: `translateX(${scrollPosition - 2800}px)` }}
        >
          환영합니다.
        </p>
      </section>

      <section className={classes.workWrap}>
        <SectionTitle title="WORK" />

        <Categori filter={categoriSelect} />

        <Pofol items={filterPofol} nowCate={selectCate} />
      </section>

      <section className={classes.resume_section}>
        <SectionTitle title="RESUME" />
        <div className={classes.resume_wrap}>
          <div className={classes.pic_intro}>
            <div className={classes.intro}>
              <p className={classes.intro_name}>PARK SEMIN</p>
              <p className={classes.intro_text}>
                안녕하세요!
                <br />
                세상과 <b>조화로운</b> 디자이너, <b>논리적으로</b> 접근하는
                디자이너
                <br />
                박세민입니다.
              </p>
            </div>
            <div className={classes.picBack}>
              <img
                className={classes.pic}
                src="images/img_parksemin.png"
                alt="프로필"
              />
            </div>
          </div>

          <div className={classes.resume_info}>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="CONTACT" />
              <div className={classes.resume_text}>
                <div className={classes.resume_icon}>
                  <img src="images/icon_call.png" alt="전화 아이콘" />
                </div>
                <p className={classes.resume_right_text}>010 7294 1590</p>
              </div>
              <div className={classes.resume_text}>
                <div className={classes.resume_icon}>
                  <img src="images/icon_mail.png" alt="메일 아이콘" />
                </div>
                <p className={classes.resume_right_text}>qlrkqnf@naver.com</p>
              </div>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="EDUCATION" />
              <p className={classes.resume_text}>
                2023.02 한국폴리텍대학교 시각디자인과 졸업
              </p>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="CERTIFICATION" />
              <p className={classes.resume_text}>
                2022.06. 시각디자인 산업기사
              </p>
              <p className={classes.resume_text}>2019.07. 웹디자인 기능사</p>
              <p className={classes.resume_text}>
                2019.02. 컴퓨터그래픽스 운용기능사
              </p>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="TOOL" />

              <div className={classes.toolBox}>
                <div className={classes.toolIcon}>
                  <img src="images/icon_photoshop.png" alt="photoshop" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_illustrator.png" alt="illustrator" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_xd.png" alt="xd" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_indesign.png" alt="indesign" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_figma.png" alt="figma" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_html5.png" alt="html5" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_css3.png" alt="css3" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_javascript.png" alt="javascript" />
                </div>
                <div className={classes.toolIcon}>
                  <img src="images/icon_react.png" alt="react" />
                </div>
              </div>
            </div>
            <div className={classes.resume_box}>
              <ResumeSubTitle subTitle="SKILL" />

              <div className={classes.polygon}>
                <p className={`${classes.abilityText} ${classes.ability1}`}>
                  기획
                </p>
                <p className={`${classes.abilityText} ${classes.ability2}`}>
                  시각화
                </p>
                <p className={`${classes.abilityText} ${classes.ability3}`}>
                  커뮤니케이션
                </p>
                <p className={`${classes.abilityText} ${classes.ability4}`}>
                  창의력
                </p>
                <p className={`${classes.abilityText} ${classes.ability5}`}>
                  구현
                </p>
                <img src="images/polygon.png" alt="abiliy polygon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={classes.byeImg}>
        <p className={classes.byeText}>또 만나요</p>
        <img src="images/bye_img.png" alt="byebye" />
      </div>

      <Footer footerTop="8870px" />
    </div>
  );
};

export default Main;
