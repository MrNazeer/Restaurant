import "./App.css";
import Sidemenu from "./components/sidemenu/Sidemenu";
import Section1 from "./components/Section1/Section1";
function App() {
  return (
    <div className="App">
      <div className="s-menu">
        <Sidemenu />
      </div>
      <div className="m-contents">
        <Section1 />
        <Section1 />
      </div>
    </div>
  );
}

export default App;
