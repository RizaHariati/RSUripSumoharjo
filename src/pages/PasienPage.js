import React from "react";
import { useGlobalContext } from "../context";
const PasienPage = () => {
  const { dataOnline } = useGlobalContext();
  const { nama, registrasi } = dataOnline;
  return (
    <div className="online-container">
      <h1>Selamat Datang {nama}</h1>
      <h1>id: {registrasi}</h1>
      <h3>Apa yang bisa kami bantu?</h3>
      <div className="online-btn-container">
        <button className="online-btn">Membayar Tagihan</button>
        <button className="online-btn">Melihat Rekam Medis</button>
        <button className="online-btn">Melihat Hasil Laboratorium</button>
      </div>
    </div>
  );
};

export default PasienPage;
