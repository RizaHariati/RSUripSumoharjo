import React from "react";
import { home_slider } from "../data/data_menu";
import { useGlobalContext } from "../context";
const Checkup = () => {
  const { showModal } = useGlobalContext();
  const data = home_slider.slice(1, 5);

  return (
    <div className="banner ex-menu-content">
      {/* <div className="background-utama"></div> */}
      <div className="ex-menu-header">
        <h1>Penawaran Paket Kesehatan</h1>
        <div className="line" />
      </div>

      <div className="paket-container">
        {data.map((slide) => {
          const { id, index, img, title1, title2, text } = slide;

          return (
            <div key={id} className="paket">
              <div className="paket-content" onClick={() => showModal(index)}>
                <img
                  src={`/assets/images/home/${img}`}
                  alt={`penawaran ${id}`}
                />
                <div className="paket-info">
                  <h3>{title1}</h3>
                  <h4 className="paket-harga">{title2}</h4>
                  <h4>{text}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkup;
