import React from "react";
import { data_pelayanan } from "../data/data_layan";
import { useGlobalContext } from "../context";
const PelayananDetail = () => {
  return (
    <div className="ex-menu-subhead">
      <h1>Pelayanan</h1>
      <div className="line" />
      <div className="pelayanan-content">
        {data_pelayanan.map((data) => {
          const { id } = data;
          return <Detail key={id} {...data} />;
        })}
      </div>
    </div>
  );
};
export default PelayananDetail;

export const Detail = ({ id, title, hari, jam, telp }) => {
  const { showModal } = useGlobalContext();
  return (
    <div className="pelayanan-info" onClick={() => showModal(id)}>
      <h2>{title}</h2>
      <h4>{hari}</h4>
      <p>jam: {jam}</p>
      {telp.map((phone) => {
        const { index, nomor } = phone;
        return (
          <p key={index}>
            <i className="fa fa-phone"></i>
            {nomor}
          </p>
        );
      })}
      <button className="pelayanan-btn">baca lebih lanjut...</button>
    </div>
  );
};
