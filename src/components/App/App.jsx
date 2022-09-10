import "./App.css";
import React from "react";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
