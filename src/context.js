import React, { useState, useContext, useRef, useEffect } from "react";
import { data_dokter } from "./data/data_dokter";
const AppContext = React.createContext();
const initValue = {
  pendaftar: "",
  usiaConsent: "",
  hubungan: "",
  telpPendaftar: "",
  pasien: "",
  alamat: "",
  kodepos: "",
  usia: "",
  telpPasien: "",
  fasilitas: "",
};

const AppProvider = ({ children }) => {
  const [isPromo, setIsPromo] = useState(true);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalID, setModalID] = useState("");
  const [term, setTerm] = useState({ termName: "all", key: "all" });
  const [dokterList, setDokterList] = useState(false);
  const [dataDokter, setDataDokter] = useState(data_dokter);
  const refNavBar = useRef(null);
  const [daftarSendiri, setDaftarSendiri] = useState(true);
  const [modalDaftar, setModalDaftar] = useState(false);
  const [dataPasien, setdataPasien] = useState(initValue);
  const [openModal, setOpenModal] = useState(false);
  const [dataOnline, setDataOnline] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const hideDokterList = () => {
    setDokterList(false);
  };
  useEffect(() => {
    if (windowSize <= 850) {
      setIsPromo(false);
    }
  }, [windowSize]);
  const showDokterList = () => {
    setDokterList(true);
  };
  useEffect(() => {
    let newData = data_dokter;
    const key = term.key;
    const termName = term.termName;
    if (termName === "") {
      hideDokterList();
    }
    if (termName === "special") {
      newData = data_dokter.filter((data) => data.poli === key);
    } else if (termName === "dokter") {
      newData = data_dokter.filter((data) => {
        return data.nama.toLowerCase().match(key.toLowerCase());
      });
    }
    setDataDokter(newData);
  }, [term]);

  const showSubmenu = () => {
    setIsSubmenu(true);
  };

  const hideSubmenu = () => {
    setIsSubmenu(false);
  };

  const showModal = (id) => {
    setModalID(id);
    setModal(true);
  };
  const hideModal = (id) => {
    setModalID(id);
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        isPromo,
        setIsPromo,
        isSubmenu,
        hideSubmenu,
        showSubmenu,
        refNavBar,
        modal,
        hideModal,
        showModal,
        modalID,
        setTerm,
        term,
        showDokterList,
        hideDokterList,
        dokterList,
        dataDokter,
        initValue,
        setdataPasien,
        dataPasien,
        setDaftarSendiri,
        daftarSendiri,
        modalDaftar,
        setModalDaftar,
        openModal,
        setOpenModal,
        dataOnline,
        setDataOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
