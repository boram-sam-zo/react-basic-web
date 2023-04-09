import "./App.css";
import Footer from "./components/Footer";
import Template from "./components/Template";
import RemoteControl from "./components/RemoteControl";

function App() {
  return (
    <>
      <Template>
        <RemoteControl></RemoteControl>
        <Footer></Footer>
      </Template>
    </>
  );
}

export default App;
