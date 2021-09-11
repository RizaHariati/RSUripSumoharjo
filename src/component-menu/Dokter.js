import React, { useState, useRef } from "react";
import { data_dokter } from "../data/data_dokter";
import { useGlobalContext } from "../context";
import DokterList from "./DokterList";
const Dokter = () => {
  const refInput = useRef(null);
  const { setTerm, term, dokterList, dataDokter, showDokterList } =
    useGlobalContext();
  const special = [...new Set(data_dokter.map((data) => data.poli))].sort();
  const [showSpecial, setshowSpecial] = useState(false);
  const [showNama, setShowNama] = useState(false);

  const listSpecial = () => {
    setShowNama(false);
    setshowSpecial(!showSpecial);
    refInput.current.value = "";
  };

  const handleSpecial = (item) => {
    setTerm({ termName: "special", key: item });
    setshowSpecial(false);
    showDokterList();
  };
  const listNama = () => {
    setshowSpecial(false);
    setShowNama(!showNama);
  };

  const handleNama = (e) => {
    e.preventDefault();
    setShowNama(true);
    setshowSpecial(false);
    setTerm({ termName: "dokter", key: e.target.value });
    showDokterList();
  };
  const handleClickNama = (nama) => {
    setTerm({ termName: "dokter", key: nama });
    showDokterList();
    refInput.current.value = nama;
    setShowNama(false);
  };
  const handleInput = (e) => {
    e.preventDefault();

    refInput.current.value = "";
  };
  return (
    <div className="banner ex-menu-content">
      <div className="background-utama"></div>
      <div className="ex-menu-header">
        <h1>Cari Dokter</h1>
        <div className="line" />
        <h3>Temukan Jadwal Dokter sesuai kebutuhan medis Anda</h3>
        <h3>Berdasarkan Nama maupun Spesialisasi</h3>
      </div>
      <div className="ex-menu-subhead"></div>
      <div className="search-container dokter">
        <div className="form-search">
          <label htmlFor="search-spesialis" className="search-label">
            <i className="fa fa-id-card-o"></i>
            <h3>Cari Berdasarkan Spesialisasi</h3>
          </label>
          <div className="search-header">
            <input
              type="text"
              name="search-spesialis"
              id="search-spesialis"
              value={
                term.termName === "special"
                  ? term.key
                  : "silahkan pilih spesialisasi.."
              }
              readOnly
            />
            <button className="search-btn" onClick={() => listSpecial()}>
              <i
                className={`${
                  showSpecial ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }`}
              ></i>
            </button>

            {showSpecial && (
              <ul className="list-search">
                {special.map((item, index) => {
                  return (
                    <li key={index} onClick={() => handleSpecial(item)}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <form className="form-search" onSubmit={(e) => handleInput(e)}>
          <label htmlFor="search-nama" className="search-label">
            <i className="fa fa-id-card"></i>
            <h3>Cari Berdasarkan Nama</h3>
          </label>
          <div className="search-header">
            <input
              type="text"
              name="search-nama"
              id="search-nama"
              ref={refInput}
              onChange={(e) => handleNama(e)}
              placeholder="silahkan ketik.."
            />
            <button
              type="submit"
              className="search-btn"
              onClick={() => listNama()}
            >
              <i
                className={showNama ? "fa fa-chevron-up" : "fa fa-chevron-down"}
              ></i>
            </button>

            {showNama && (
              <ul className="list-search">
                {dataDokter.map((data) => {
                  const { id, nama } = data;
                  return (
                    <li key={id} onClick={() => handleClickNama(nama)}>
                      {nama}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </form>
      </div>
      {dokterList && <DokterList />}
    </div>
  );
};

export default Dokter;
