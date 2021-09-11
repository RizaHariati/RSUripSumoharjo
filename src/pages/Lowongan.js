import React, { useState } from "react";
import { loker } from "../data/data_loker";
const Lowongan = () => {
  const [showLoker, setShowLoker] = useState(false);
  const [dataLoker, setDataLoker] = useState("");
  const handleClick = (id) => {
    setShowLoker(true);
    const newData = loker.find((item) => item.id === id);
    setDataLoker(newData);
  };
  return (
    <div className="lowongan-kerja">
      <h2>Saat ini kami membutuhkan tenaga kerja untuk :</h2>
      <div className="line"></div>
      <div className="loker-container">
        <div className="loker-list">
          {loker.map((item) => {
            const { id, pengalaman, tanggal, title } = item;
            return (
              <div
                key={id}
                className="loker-item"
                onClick={() => handleClick(id)}
              >
                <h3>{title}</h3>
                <div className="line"></div>
                <h4>pengalaman minimal : {pengalaman} tahun</h4>
                <h4>{tanggal}</h4>
                <p>baca lebih detail...</p>
              </div>
            );
          })}
        </div>
        <div className="loker-content">
          {!showLoker && (
            <img src="/assets/images/team-doctor.jpg" alt="doctors" />
          )}
          {showLoker && <Loker data={dataLoker} />}
        </div>
      </div>
    </div>
  );
};

export default Lowongan;

export const Loker = ({ data }) => {
  const { pengalaman, tanggal, title, kualifikasi } = data;

  return (
    <div className="loker-content-items">
      <h3>{title}</h3>
      <div className="line"></div>
      <h4>dipost tanggal : {tanggal}</h4>
      <h4>pengalaman minimal : {pengalaman} tahun</h4>

      <ul className="loker-content-list">
        {kualifikasi.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
