/* global kakao */
import React, { useEffect, useState } from 'react';
import './MapGuide.scss';
import { MapMarkerData } from './MapMarkerData.js';

const { kakao } = window;

const MapGuide = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.559359, 126.922648),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    MapMarkerData.forEach((el) => {
      // 마커를 생성
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: kakaoMap,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  }, []);

  return (
    <div
      id="map"
      className="MapView"
      style={{ width: '600px', height: '370px' }}
    ></div>
  );
};

/*
  public/index.html 에서 header에 script 속성 추가 해야 동작합니다.
  <script
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=da81fcbf3012fa628338201029a0401a"
    ></script>

    App.js

    <ImageWrap>
        <ImagePhoto></ImagePhoto>
      </ImageWrap>
      <MapGuide />
*/

export default MapGuide;
