// @flow
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Daftar from "../Registrasi/Daftar";
import Login from "../Registrasi/Login";
import Lupasandi from "../Registrasi/Lupasandi";
import dashboard from "../Home/pDashboard/Index";
import Routerhome from "../Home/Routerhome";
import { useHistory } from "react-router";
import Navdrawerper from "../UserPerusahaan/navdrawerper";
import Navdrawer from "../Home/Navdrawer";
import Testbar from "../Testbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/daftar" component={Daftar} />
          <Route path="/Lupasandi" component={Lupasandi} />
          <Route path="/Testbar" component={Testbar} />
          {/* <Route path="/perusahaan" component={Navdrawerper} /> */}
          {/* <Route path="/karyawan" component={Navdrawer} /> */}
        <Navdrawerper/>
        {/* <Navdrawer/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
