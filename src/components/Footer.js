import React from "react";
import "./Footer.scss";
import notionlogo from "../notion.svg";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="link">
        <FaGithub />
        Github|
        <img
          src={notionlogo}
          className="notion-logo"
          alt="notionlogo"
          width={16}
          height={16}
        />
        Notion
      </div>
      <div className="text">대표자 : 박소영</div>
      <div className="text">장소 : 미국시 뉴욕구 서울동 188-23</div>
      <div className="text">연락처 : 010-0000-1111</div>
    </div>
  );
};

export default Footer;
