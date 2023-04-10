import './App.css';
import Footer from './components/Footer';
import Template from './components/Template';
import RemoteControl from './components/RemoteControl';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import MapGuide from './components/MapGuide';
import ImagePhoto from './components/ImagePhoto';
import ImageWrap from './components/ImageWrap';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
