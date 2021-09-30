// @flow
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Daftar from "./Daftar";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/daftar" component={Daftar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
