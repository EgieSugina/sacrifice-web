import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/styles/tailwind.css";
import 'antd/dist/antd.css';
import Home from "./view/home.";
import { store } from "./store";
import { Provider } from "react-redux";
ReactDOM.render(<>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        {/* <Route path="/admin" component={Admin} /> */}
        {/* <Route path="/auth" component={Auth} /> */}
        {/* add routes without layouts */}
        {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} /> */}
        <Route path="/" exact component={Home} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider></>,
  document.getElementById("root")
);
