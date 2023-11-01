import React, { useEffect, useState } from "react";
import "./App.css";
import { Discover, Home, Join, Login } from "./components/index";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loading } from "./components/LoadingPage";

const App = () => {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={ <Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
