import React from "react";
import { data_fasilitas } from "../data/data_layan";
import { useGlobalContext } from "../context";

const FasilitasDetail = () => {
  const fasMenu = [...new Set(data_fasilitas.map((item) => item.kategori))];

  return (
    <div className="ex-menu-subhead">
      <h1>Fasilitas</h1>
      <div className="line" />
      <div className="fasilitas-container">
        {fasMenu.map((menu, index) => {
          const newData = data_fasilitas.filter(
            (item) => item.kategori === menu
          );
          return (
            <div key={index}>
              <h2>{menu}</h2>
              <div className="line"></div>
              <div className="fasilitas-content">
                {newData.map((data) => {
                  const { id } = data;
                  return <Detail key={id} {...data} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FasilitasDetail;

export const Detail = ({ id, title, img }) => {
  const { showModal } = useGlobalContext();
  return (
    <div className="fasilitas-info" onClick={() => showModal(id)}>
      <h4>{title}</h4>
      <img src={`/assets/images/pelayanan-fasilitas/${img}.jpg`} alt={title} />
    </div>
  );
};
