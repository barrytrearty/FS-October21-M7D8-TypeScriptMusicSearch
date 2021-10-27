import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/details/:id" component={Details} />
      </Router>
    </div>
  );
}

export default App;
