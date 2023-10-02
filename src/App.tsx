import "./App.css";
import { Home, Registry } from "./components/index";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </Router>
  );
};

export default App;
