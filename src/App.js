import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>

      <div className="header">
        <Link to="/">
          <button className="homebtn">HOME</button>
        </Link>{" "}
        <Link to="/explore">
          <button className="explorebtn">EXPLORE</button>
        </Link>{" "}
        <Link to="/profile">
          <button className="profilebtn">PROFILE</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
