import $ from 'jquery';
import './Header.css';

const Header = () => {
  $(function () {
    $('.depth1 > li')
      .mouseover(function () {
        $(this).find('.depth2').stop().slideDown();
      })
      .mouseleave(function () {
        $(this).find('.depth2').stop().slideUp();
      });
  });

  return (
    <header className="wrap">
      <div className="header">
        <div className="size">
          <div>
            <img className="logo" src="img/strawberry.png" alt="로고" />
          </div>
        </div>
      </div>
      <b>
        <div className="menu">
          <ul className="depth1">
            <li>
              <a href="#p1">박소영</a>
              <ul className="depth2">
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
            <li>
              <a href="#p5">김은수</a>
              <ul className="depth2">
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
            <li>
              <a href="#p4">노은기</a>
              <ul className="depth2">
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
            <li>
              <a href="#p3">박지건</a>
              <ul className="depth2">
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
            <li>
              <a href="#p2">배동우</a>
              <ul className="depth2">
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
      </b>
    </header>
  );
};

export default Header;
