import "./App.css";
import {
  Art,
  Discover,
  Home,
  Join,
  Landscape,
  Login,
  Portrait,
  Sport,
} from "./components/index";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/sport" element={<Sport />} />
        <Route path="/discover/art" element={<Art />} />
        <Route path="/discover/portrait" element={<Portrait />} />
        <Route path="/discover/landscape" element={<Landscape />} />
      </Routes>
    </Router>
  );
};

export default App;
