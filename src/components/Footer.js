import React from 'react';
import './Footer.scss';
import notionlogo from '../notion.svg';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="link">
        <a href="https://github.com/boram-sam-zo/react-basic-web">
          <FaGithub />
          Github
        </a>
        |
        <a href="https://www.notion.so/DS-SW-1-3-8d84fb9c95a249cb93d890d94d8b23db?pvs=4">
          <img
            src={notionlogo}
            className="notion-logo"
            alt="notionlogo"
            width={16}
            height={16}
          />
          Notion
        </a>
      </div>
      <div className="text">대표자 : 박소영</div>
      <div className="text">장소 : 미국시 뉴욕구 서울동 188-23</div>
      <div className="text">연락처 : 010-0000-1111</div>
    </div>
  );
};

export default Footer;
