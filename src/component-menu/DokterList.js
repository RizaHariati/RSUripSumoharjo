import React from "react";
import { useGlobalContext } from "../context";
const DokterList = () => {
  const { dataDokter, term } = useGlobalContext();

  if (dataDokter.length === 0) {
    return (
      <div className="ex-menu-subhead">
        <h1>Tidak ditemukan dokter sesuai keyword</h1>
        <div className="line" />
      </div>
    );
  }
  return (
    <div className="ex-menu-subhead">
      <h1>{`Dokter ${
        term.termName === "special" ? " Spesialis " + term.key : "Anda "
      }`}</h1>
      <div className="line" />
      <div className="dokter-container">
        {dataDokter.map((data) => {
          const { id, hari, gender, jam, nama, poli, waktu } = data;

          return (
            <div key={id} className="dokter-content">
              <div className="dokter-image">
                <img
                  className="image"
                  src={`/assets/images/dokter/${
                    gender === "male" ? "male" : "female"
                  }.jpg`}
                  alt="dokter"
                />
              </div>
              <div className="dokter-info">
                <h4>dr. {nama}</h4>
                <p className="dokter-spesialis">Spesialis : {poli}</p>
                <p>
                  hari : {hari}, {waktu}
                </p>
                <p>jam : {jam}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DokterList;
