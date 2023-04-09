import React, { useState } from "react";
import "./Header.css";
import logo from "./img/strawberry.png";

const Header = () => {
  const [Menu, setMenu] = useState({ display: "none" });

  function menuHandler(show) {
    setMenu({ display: show });
  }

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
          <li
            onMouseOver={() => menuHandler("block")}
            onMouseOut={() => menuHandler("none")}
          >
            <a href="">박소영</a>
            <ul style={Menu}>
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
          <li
            onMouseOver={() => menuHandler("block")}
            onMouseOut={() => menuHandler("none")}
          >
            <a href="">김은수</a>
            <ul className="depth2" style={Menu}>
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
          <li
            onMouseOver={() => menuHandler("block")}
            onMouseOut={() => menuHandler("none")}
          >
            <a href="">노은기</a>
            <ul className="depth2" style={Menu}>
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
          <li
            onMouseOver={() => menuHandler("block")}
            onMouseOut={() => menuHandler("none")}
          >
            <a href="">박지건</a>
            <ul className="depth2" style={Menu}>
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
          <li
            onMouseOver={() => menuHandler("block")}
            onMouseOut={() => menuHandler("none")}
          >
            <a href="">배동우</a>
            <ul className="depth2" style={Menu}>
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
