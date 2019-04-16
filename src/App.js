import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Manavbar from "./components/Manavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Manavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Profil" component={Profil} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
