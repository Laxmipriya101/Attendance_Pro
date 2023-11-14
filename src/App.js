import "./App.css";
import BarChat from "./Componenet/BarChat";
import HomeWork from "./Componenet/HomeWork";
import LogoMobile from "./Componenet/LogoMobile";
import Week from "./Componenet/Week";

function App() {
  return (
    <div>
      <LogoMobile />
      <br />
      <br />
      <Week />
      <div className="smallContain">
        <HomeWork />
        <BarChat />
      </div>
    </div>
  );
}

export default App;
