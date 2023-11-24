import "./App.css";
import Pace from "./components/Pace";
import Time from "./components/Time";
import Distance from "./components/Distance";

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={require("./assets/LibertyRunnersLogo.png")} />
      <header className="App-header">
        <h1 className="title">Pace Calculator</h1>
        <form action="/action_page.php">
          <div className="calculate-box container">
            <div className="label">
              {" "}
              <label>Distance :</label>
            </div>
            <div>
              {" "}
              <Distance />
            </div>
            <div className="label">
              {" "}
              <label>Time :</label>
            </div>
            <div>
              {" "}
              <Time />
            </div>
            <div className="label">
              {" "}
              <label>Pace :</label>
            </div>
            <div>
              {" "}
              <Pace />
            </div>
          </div>
          <div className="button">
            <button className="calculate-button">Calculate</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
