<<<<<<< HEAD
import "./App.css";
import Footer from "./components/Footer";
import Template from "./components/Template";
import RemoteControl from "./components/RemoteControl";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import MapGuide from "./components/MapGuide";
import ImagePhoto from "./components/ImagePhoto";
import ImageWrap from "./components/ImageWrap";
import Board from "./components/Board";

=======
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
>>>>>>> 1a988aa22e0ad759e083d05344df640941fe67b2
function App() {
  const [popup, setPopup] = useState(true);
  return (
    <>
<<<<<<< HEAD
      <Template>
        <Header />
        <TopBanner />
        <ImageWrap>
          <ImagePhoto />
        </ImageWrap>
        <MapGuide />
        <Footer />
      </Template>
      <RemoteControl></RemoteControl>
=======
      <TemplateWrap>
        <Template>
          <Header />
        </Template>

        <TopBanner />

        <Template>
          <ImageWrap>
            <ImagePhoto />
          </ImageWrap>

          <MapGuide />
          <RemoteControl></RemoteControl>
        </Template>
        <BottomBanner />
        {popup ? <Popup onClose={setPopup} /> : null}
        <Template>
          <Footer />
        </Template>
      </TemplateWrap>
>>>>>>> 1a988aa22e0ad759e083d05344df640941fe67b2
    </>
  );
}

export default App;
