import React from "react";
import PelayananDetail from "./PelayananDetail";
import PendaftaranDetail from "./PendaftaranDetail";
const DaftarPasien = () => {
  return (
    <div className="banner ex-menu-content">
      <div className="background-utama"></div>
      <div className="ex-menu-header">
        <h1>Pendaftaran Pasien</h1>
        <div className="line" />
        <h3>Barisan Garda Depan Kami Siap Melayani </h3>
        <h3>Dengan Dukungan Fasilitas yang Mumpuni</h3>
      </div>
      <div className="ex-menu-subhead"></div>

      <div className="pendaftaran-intro">
        <p className="text">
          Kami menjalankan Prosedur Kesehatan dengan ketat sesuai petunjuk
          Kementrian Kesehatan, mengusahakan keamanan terbaik untuk anda dimasa
          COVID-19
        </p>
        <p className="text">
          Diluar jam pendaftaran, Anda juga bisa mendaftar secara online dengan
          mengisi formulir dibawah. Jika data anda valid, salah satu admin kami
          akan menghubungi anda pada jam kerja baik melalui WhatsApp maupun
          telpon untuk mengkonfirmasi pendaftaran
        </p>
      </div>
      <PelayananDetail />
      <PendaftaranDetail />
    </div>
  );
};

export default DaftarPasien;
