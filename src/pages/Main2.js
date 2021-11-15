import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../component-menu/Home";
import Menu from "../Menu";
import RawatInap from "../component-menu/RawatInap";
import Dokter from "../component-menu/Dokter";
import Fasilitas from "../component-menu/Fasilitas";
import DaftarPasien from "../component-menu/DaftarPasien";
import DataPasien from "../component-menu/DataPasien";
import PaketKesehatan from "../component-menu/PaketKesehatan";

const Main = () => {
  const { url } = useRouteMatch();

  return (
    <div className="container">
      <div className="banner">
        <Switch>
          <Route exact path={`${url}`}>
            <Home />
          </Route>
          <Route path={`${url}/rawatinap`}>
            <RawatInap />
          </Route>
          <Route path={`${url}/fasilitas`}>
            <Fasilitas />
          </Route>
          <Route path={`${url}/dokter`}>
            <Dokter />
          </Route>
          <Route path={`${url}/daftarpasien`}>
            <DaftarPasien />
          </Route>
          <Route path={`${url}/paketkesehatan`}>
            <PaketKesehatan />
          </Route>
          <Route path={`${url}/dataPasien`}>
            <DataPasien />
          </Route>

          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="exclusive-menu">
        <Menu url={url} />
      </div>
    </div>
  );
};

export default Main;
