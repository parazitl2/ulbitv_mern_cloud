import React from "react";
import Navbar from "./navbar/Navbar";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./authorisation/Registration";
import Login from "./authorisation/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path="/registration" component={ Registration }/>
          <Route path="/login" component={ Login }/>
        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default React.memo(App);
