import React from "react";
import { useGlobalContext } from "../context";

const ModalPendaftaran = () => {
  const {
    setModalDaftar,
    daftarSendiri,
    initValue,
    setdataPasien,
    dataPasien,
    openModal,
    setOpenModal,
  } = useGlobalContext();

  const {
    pendaftar,
    usiaConsent,
    hubungan,
    telpPendaftar,
    pasien,
    alamat,
    kodepos,
    usia,
    telpPasien,
    fasilitas,
  } = dataPasien;

  const handleSetuju = () => {
    setOpenModal(true);
    let delay = new Promise((resolve) => {
      setTimeout(() => {
        resolve(setModalDaftar(false), setOpenModal(false));
      }, 1400);
    });

    return delay.then(setdataPasien(initValue));
  };

  const handleUbah = () => {
    setModalDaftar(false);
  };
  if (dataPasien) {
    return (
      <div className="modal-daftar-container">
        <div className="modal-daftar-content">
          <fieldset className="fieldset-daftar">
            <legend>Konfirmasi Pendaftaran</legend>
            <div className="data-pendaftar">
              <p>Pendaftar </p>
              <p>:</p>
              <p>{hubungan || "Sendiri"}</p>
            </div>
            {!daftarSendiri && (
              <div className="data-pendaftar-container">
                <div className="data-pendaftar">
                  <p>Nama Pendaftar </p>
                  <p>:</p>
                  <p>{pendaftar}</p>
                </div>
                <div className="data-pendaftar">
                  <p>Usia dibawah 18 thn</p>
                  <p>:</p>
                  <p>{usiaConsent}</p>
                </div>
                <div className="data-pendaftar">
                  <p>Nomor Telepon</p>
                  <p>:</p>
                  <p>{telpPendaftar}</p>
                </div>
              </div>
            )}
            <div className="data-pendaftar">
              <p>Nama Pasien </p>
              <p>:</p>
              <p>{pasien}</p>
            </div>
            <div className="data-pendaftar-container">
              <div className="data-pendaftar">
                <p>alamat </p>
                <p>:</p>
                <p>{alamat}</p>
              </div>
              <div className="data-pendaftar">
                <p>kodepos</p>
                <p>:</p>
                <p>{kodepos}</p>
              </div>
              <div className="data-pendaftar">
                <p>Usia</p>
                <p>:</p>
                <p>{usia}</p>
              </div>
              <div className="data-pendaftar">
                <p>Telepon</p>
                <p>:</p>
                <p>{telpPasien}</p>
              </div>
            </div>
            <div className="data-pendaftar">
              <p>Tujuan pendaftaran </p>
              <p>:</p>
              <p>{fasilitas}</p>
            </div>
          </fieldset>
          <div className="daftar-btn-container">
            <button className="daftar-btn" onClick={handleSetuju}>
              Setuju
            </button>
            <button className="daftar-btn" onClick={handleUbah}>
              Ubah
            </button>
          </div>
          {openModal && (
            <div className="daftar-alert">
              <div className="alert">
                <img src="/assets/images/logo bulat.jpg" alt="logo" />
                <h3>Data Disimpan</h3>
                <p>Admin kami akan menghubungi anda secepatnya</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ModalPendaftaran;
