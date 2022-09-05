import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navdrawer from "./Navdrawer";
import kadaluarsa from "./pDaftardata/kadaluarsa";
import obat from "./pDaftardata/obat";
import penerimaan from "./pDaftardata/penerimaan";
import Index from "./pDashboard/Index";
// import pexport from "./pexport";
import Barang from "./pPembelian/Barang";
import Catatansp from "./pPembelian/Catatansp";

const Routerhome = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Switch> */}
        <Navdrawer />
        {/* </Switch> */}
        {/* <Switch>
          <Route path="/dashboard" component={Index} />
          <Route path="/barang" component={Barang} />
          <Route path="/catatansp" component={Catatansp} />
          <Route path="/penerimaan" component={penerimaan}/>
          <Route path="/obat" component={obat}/>
          <Route path="/kadaluarsa" component={kadaluarsa}/>
          <Route path="/export" component={pexport}/>
        </Switch> */}
      </BrowserRouter>
    </div>
  );
};

export default Routerhome;
