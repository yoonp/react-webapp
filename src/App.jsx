import "./App.css";
import Pace from "./components/Pace";
import Time from "./components/Time";
import Distance from "./components/Distance";

function App() {
  return (
    <div className="App">
      <img
        className="App-logo"
        src={require("./assets/LibertyRunnersLogo.png")}
      />
      <div className="App-main">
        <div className="title">
          <h1 className="title-text">Pace Calculator</h1>
        </div>
        <div className="form">
          <form action="/action_page.php">
            <div className="calculate-box container">
              <div className="label">
                <label>Distance :</label>
              </div>
              <div className="inputboxes">
                <Distance />
              </div>
              <div className="label">
                <label>Time :</label>
              </div>
              <div className="inputboxes">
                <Time />
              </div>
              <div className="label">
                <label>Pace :</label>
              </div>
              <div className="inputboxes">
                <Pace />
              </div>
            </div>
            <div className="button">
              <button className="calculate-button">Calculate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
