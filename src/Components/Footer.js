import React from "react";

const Footer = (props) => {
  return (
    <footer
      style={{
        top: `${props.footerTop}`,
        bottom: `${props.footerBottom}`,
        width: "1698px",
        borderTop: "1px solid #666",
        position: "absolute",
        zIndex: "2",
        left: "50%",
        transform: "translateX(-50%)",
        paddingBottom: "100px",
      }}
    >
      <p
        style={{
          fontFamily: "GmarketSansBold",
          fontSize: "24px",
          color: `${props.footerTitleColor}`,
          textAlign: "center",
          paddingTop: "65px",
        }}
      >
        sam portfolio
      </p>
      <p
        style={{
          fontFamily: "GmarketSansMedium",
          fontSize: "16px",
          color: "#ccc",
          textAlign: "center",
          marginTop: "65px",
        }}
      >
        이 페이지는 개인 포트폴리오 목적으로 제작되었습니다.
      </p>
    </footer>
  );
};

export default Footer;
