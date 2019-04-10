import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Profil />
      </div>
    );
  }
}

export default App;
