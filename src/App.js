import './App.css';
import Footer from './components/Footer';
import Template from './components/Template';
import RemoteControl from './components/RemoteControl';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import MapGuide from './components/MapGuide';
import ImagePhoto from './components/ImagePhoto';
import ImageWrap from './components/ImageWrap';
import BottomBanner from './components/BottomBanner';
import TemplateWrap from './components/TemplateWrap';
import { useState } from 'react';
import Popup from './components/Popup';
import Board from './components/Board';
import ModalBasic from './components/ModalBasic';

function App() {
  const [popup, setPopup] = useState(true);
  return (
    <>
      <TemplateWrap>
        <Header />
        <TopBanner />
        <Template>
          <ImageWrap>
            <ImagePhoto />
          </ImageWrap>
          <Board />
          <MapGuide />
          <RemoteControl></RemoteControl>
          {/* </Template>
        <BottomBanner />
        <Template> */}
          <Footer />
        </Template>
      </TemplateWrap>
    </>
  );
}

export default App;
