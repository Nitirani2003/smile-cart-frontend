import React from "react";

import Home from "components/Home";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Product from "./components/Product";

const App = () => (
  <>
    <div className="flex space-x-2">
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
    </div>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Product} path="/product" />
    </Switch>
  </>
);

export default App;
