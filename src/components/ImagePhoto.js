import "./ImagePhoto.scss";

const ImagePhoto = () => {
  return (
    <div className="ImagePhoto">
      <div className="user ll">
        <img className="photo" src="img/photo1.jpg" />
        <span className="text">
          <br />
          박소영
          <br />
          <br />
          - 100가지 취미 만들기가 인생 목표입니다.
          <br />
          - 추천 맛집 : 최사장네닭 <br />
        </span>
      </div>

      <div className="user rr">
        <span className="text">
          <br />
          김은수
          <br />
          <br />
          - schonlife99@gmail.com
          <br />
          - SayingGamja
          <br />
          - 경영전공을 했지만 개발자로서의 커리어를 꿈꾸고 있습니다. <br />
          여러분들과 함께 성장하는 사람이 되고 싶습니다.
          <br />- 추천 맛집: 낙곱새미장원
        </span>
        <img src="img/photo5.jpg" className="photo" />
      </div>

      <div className="user ll">
        <img src="img/photo4.jpg" className="photo" />
        <span className="text">
          <br />
          노은기
          <br />
          <br />
          - jin0201948@gmail.com
          <br />
          - Nohkii
          <br />
          - 모든 일에 최선을 다하는 사람이 되자 <br />
          - 추천 맛집 : 코코로카라
          <br />
        </span>
      </div>

      <div className="user rr">
        <span className="text">
          <br />
          박지건 <br />
          <br />
          - 계속 성장하는 사람이고 싶습니다.
          <br />
          - zeegeon@naver.com
          <br />
          - 코로나 격리 (~4.17) <br />
          - 다들 건강조심하세요..
          <br />
          - 추천 맛집 : 연남칼국수
          <br />
        </span>
        <img src="img/photo3.jpg" className="photo" />
      </div>

      <div className="user ll">
        <img className="photo" src="img/photo2.jpg" />
        <span className="text">
          <br />
          배동우
          <br />
          <br />
          - ehddn5410@naver.com <br />
          - 보노보노처럼 살고 싶은 사람 <br />
          “틀린 길로 가도 괜찮아 다른 걸 발견할 수 있을 테니까” <br />
          - 추천 맛집 : 우동 가조쿠
          <br />
        </span>
      </div>
    </div>
  );
};

export default ImagePhoto;
