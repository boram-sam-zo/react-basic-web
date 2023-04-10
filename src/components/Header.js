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
          <div>보람삼조</div>
        </div>
      </div>
      <b>
        <div className="menu">
          <ul className="depth1">
            <li>
              <a href="#i1">박소영</a>
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
                  <a
                    href="https://blog.naver.com/karan1002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href="map.html">맛집</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#i2">김은수</a>
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
                  <a
                    href="https://blog.naver.com/eponine99"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%99%8D%EB%8C%80+%EB%82%99%EA%B3%B1%EC%83%88%EB%AF%B8%EC%9E%A5%EC%9B%90&oquery=%ED%99%8D%EB%8C%80+%EC%97%B0%EB%82%A8%EC%B9%BC%EA%B5%AD%EC%88%98&tqi=ivnKPwp0YidsshIP1RGssssstcZ-424446"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    맛집
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#i3">노은기</a>
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
                  <a
                    href="https://ek0129.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%BD%94%EC%BD%94%EB%A1%9C%EC%B9%B4%EB%9D%BC+%ED%99%8D%EB%8C%80&oquery=%EC%9A%B0%EB%8F%99%EA%B0%80%EC%A1%B0%EC%BF%A0+%ED%99%8D%EB%8C%80&tqi=ivn7HsprvmssscjEZwRssssstG4-310291"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    맛집
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#i4">박지건</a>
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
                  <a
                    href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%99%8D%EB%8C%80+%EC%97%B0%EB%82%A8%EC%B9%BC%EA%B5%AD%EC%88%98&oquery=%EC%BD%94%EC%BD%94%EB%A1%9C%EC%B9%B4%EB%9D%BC+%ED%99%8D%EB%8C%80&tqi=ivnKndprvTVsscEYD7NssssssWG-339341"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    맛집
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#i5">배동우</a>
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
                  <a
                    href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9A%B0%EB%8F%99%EA%B0%80%EC%A1%B0%EC%BF%A0+%ED%99%8D%EB%8C%80&oquery=%EC%9A%B0%EB%8F%99%EA%B0%80%EC%A1%B0%EC%BF%A0&tqi=ivn73lprvh8ssdX9oq0ssssssB4-333440"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    맛집
                  </a>
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
