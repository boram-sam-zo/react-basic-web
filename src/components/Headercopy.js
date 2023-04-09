import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "./img/strawberry.png";

const Header = () => {
  const liRef = useRef([]);
  const ulRef = useRef([]);

  useEffect(() => {
    if ((ulRef.current[0].style.display = "none")) {
      liRef.current[0].addEventListener(
        "MouseOver",
        () => (ulRef.current[0].style.display = "block")
      );
    } else {
      ulRef.current[0].addEventListener(
        "MouseOut",
        () => (ulRef.current[0].style.display = "none")
      );
    }
  });

  return (
    <header className="wrap">
      <div className="header">
        <div className="size">
          <div>
            <img className="logo" src={logo} alt="로고" />
          </div>
        </div>
      </div>
      <div className="menu">
        <ul className="depth1">
          <li ref={(el) => (liRef.current[0] = el)}>
            <a href="">박소영</a>
            <ul ref={(el) => (ulRef.current[0] = el)}>
              <li>
                <a
                  href="https://github.com/soieu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="map.html">맛집</a>
              </li>
            </ul>
          </li>
          <li ref={(el) => (liRef.current[1] = el)}>
            <a href="">김은수</a>
            <ul className="depth2" ref={(el) => (ulRef.current[1] = el)}>
              <li>
                <a
                  href="https://github.com/SayingGamja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">맛집</a>
              </li>
            </ul>
          </li>
          <li ref={(el) => (liRef.current[2] = el)}>
            <a href="">노은기</a>
            <ul className="depth2" ref={(el) => (ulRef.current[2] = el)}>
              <li>
                <a
                  href="https://github.com/Nohkii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">맛집</a>
              </li>
            </ul>
          </li>
          <li ref={(el) => (liRef.current[3] = el)}>
            <a href="">박지건</a>
            <ul className="depth2" ref={(el) => (ulRef.current[3] = el)}>
              <li>
                <a
                  href="https://github.com/zeegeon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">맛집</a>
              </li>
            </ul>
          </li>
          <li ref={(el) => (liRef.current[4] = el)}>
            <a href="">배동우</a>
            <ul className="depth2" ref={(el) => (ulRef.current[4] = el)}>
              <li>
                <a
                  href="https://github.com/BaeDongWoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">맛집</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
