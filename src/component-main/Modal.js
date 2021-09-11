import React from "react";
import { useGlobalContext } from "../context";
import { data_pelayanan, data_fasilitas } from "../data/data_layan";
import { home_slider } from "../data/data_menu";
const Modal = () => {
  const { hideModal, modalID } = useGlobalContext();
  const inputID = modalID.substring(0, 3);

  if (inputID === "lay") {
    const newData = data_pelayanan.find((item) => item.id === modalID);
    const { title, img, hari, jam, telp, info } = newData;
    return (
      <div className="modal-container">
        <div className="modal-content">
          <div
            className="modal-image"
            style={{
              background: `linear-gradient(70deg, #ffffff, #ffffffe3 20%, #00000000 60%, #00000000 ), url('/assets/images/pelayanan-fasilitas/${img}.jpg') center/cover no-repeat`,
            }}
          ></div>
          <div className="modal-info">
            <div className="header">
              <h2>
                {title}
                <div className="line"></div>
              </h2>
            </div>
            <h4>Buka : {hari} </h4>
            <h4>jam {jam}</h4>
            {telp.map((telpon) => {
              const { nomor, index } = telpon;
              return (
                <h4 key={index}>
                  <i className="fa fa-phone"></i> {nomor}
                </h4>
              );
            })}
            {info.map((infotext, index) => {
              return (
                <p key={index} className="text">
                  {infotext.text}
                </p>
              );
            })}
          </div>
          <button className="close-btn" onClick={() => hideModal()}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    );
  } else if (inputID === "fas") {
    const newData = data_fasilitas.find((item) => item.id === modalID);
    const { img, info, title } = newData;

    return (
      <div className="modal-container">
        <div className="modal-content">
          <div
            className="modal-image"
            style={{
              background: `linear-gradient(70deg, #ffffff, #ffffffe3 20%, #00000000 60%, #00000000 ), url('/assets/images/pelayanan-fasilitas/${img}.jpg') center/cover no-repeat`,
            }}
          ></div>
          <div className="modal-info">
            <div className="header">
              <h2>
                {title}
                <div className="line"></div>
              </h2>
            </div>

            {info.map((infotext, index) => {
              return (
                <p key={index} className="text">
                  {infotext.text}
                </p>
              );
            })}
          </div>
          <button className="close-btn" onClick={() => hideModal()}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    );
  } else if (inputID === "pro") {
    const newData = home_slider.find((item) => item.index === modalID);
    const { img, title2, title1, text, harga } = newData;

    return (
      <div className="modal-container">
        <div className="modal-content">
          <div
            className="modal-image"
            style={{
              background: `linear-gradient(70deg, #ffffff, #ffffffe3 20%, #00000000 60%, #00000000 ), url('/assets/images/home/${img}') center/cover no-repeat`,
            }}
          ></div>
          <div className="modal-info">
            <div className="header">
              <h2>
                {title1}
                <div className="line"></div>
              </h2>
              <h2>{title2}</h2>
              <h2>discount dari harga {harga}</h2>
            </div>

            <h3 className="text">{text}</h3>
          </div>
          <button className="close-btn" onClick={() => hideModal()}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div
          className="modal-image"
          style={{
            background: `linear-gradient(70deg, #ffffff, #ffffffe3 20%, #00000000 60%, #00000000 ), url('/assets/images/pelayanan-fasilitas/icu.jpg') center/cover no-repeat`,
          }}
        ></div>
        <div className="modal-info">
          <div className="header">
            <h2>
              Data is Not Found
              <div className="line"></div>
            </h2>
          </div>
        </div>
        <button className="close-btn" onClick={() => hideModal()}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
