import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Promo from "./component-main/Promo";
import About from "./pages/About";
import Main1 from "./pages/Main1";
import Main2 from "./pages/Main2";
import Nav from "./component-main/Nav";
import HakKewajiban from "./pages/HakKewajiban";
import Lowongan from "./pages/Lowongan";
import { useGlobalContext } from "./context";
import Modal from "./component-main/Modal";
import ModalPendaftaran from "./component-main/ModalPendaftaran";
import PasienPage from "./pages/PasienPage";

const App = () => {
  const { modal, modalDaftar, setIsPromo } = useGlobalContext();

  return (
    <Router>
      <div className="main-container" onWheel={() => setIsPromo(false)}>
        <Promo />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main1 />
          </Route>
          <Route path="/home">
            <Main2 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hakkewajiban">
            <HakKewajiban />
          </Route>
          <Route path="/lowongan">
            <Lowongan />
          </Route>
          <Route path="/pasienpage">
            <PasienPage />
          </Route>
        </Switch>
        {modal && <Modal />}
        {modalDaftar && <ModalPendaftaran />}
        <footer className="footer"></footer>
      </div>
    </Router>
  );
};

export default App;
