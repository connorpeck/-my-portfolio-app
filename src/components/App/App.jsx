import "./App.css";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
       <Routes>
      
        <Route exact path="projects">
          <Projects />
        </Route>
      
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
