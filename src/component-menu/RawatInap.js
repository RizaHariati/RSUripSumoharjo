import React, { useState } from "react";
import { data_inap } from "../data/data_inap";

const RawatInap = () => {
  return (
    <div className="banner ex-menu-content">
      <div className="background-utama"></div>
      <div className="ex-menu-header">
        <h4 style={{ color: "var(--accent)" }}>
          Jam besuk : Pagi Pukul 11.00 - 12.00 Wib || Sore Pukul 17.00 - 18.00
          Wib
        </h4>
        <h1>Rawat Inap</h1>
        <div className="line" />
        <h4>Pendaftaran Rawat Inap dan Pemesanan Kamar</h4>
        <h4>
          Buka setiap hari (24 jam) <i className="fa fa-phone" /> 0811 7270 537
        </h4>
      </div>
      <div className="ex-menu-subhead"></div>
      <div className="ex-menu-intro">
        <div
          className="image"
          style={{
            background:
              "url('/assets/images/pilihan-kamar/RSJakarta.jpg') center/cover no-repeat ",
          }}
        ></div>
        <div className="info">
          <p>
            Ruang Rawat Inap RS Urip Sumoharjo terbagi atas ruang perawatan
            dewasa, ruang perawatan anak, ruang perawatan kebidanan, ruang
            isolasi dan ruang rawat intensif. Rumah Sakit Jakarta memiliki
            beberapa jenis ruang perawatan yang sesuai dengan kebutuhan dan
            kondisi keuangan Anda.
          </p>
        </div>
      </div>

      <div className="rawat-inap-pilihan">
        <h2>Pilihan Kamar</h2>

        <div className="rawat-inap-rooms">
          {data_inap.map((data) => {
            const { id } = data;
            return <RawatInapRoom key={id} {...data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RawatInap;

const RawatInapRoom = ({ id, kelas, pasien, harga, img, fasilitas }) => {
  const [showRoomDetail, setShowRoomDetail] = useState(false);

  const toggleRoomDetail = (e) => {
    setShowRoomDetail(!showRoomDetail);
  };
  return (
    <div className="rawat-inap-room ">
      <div className="rawat-inap-info  ">
        <div className="info">
          <h3>{kelas}</h3>
          <h4>Jumlah pasien/ruangan {pasien} orang</h4>
          <h4>Harga kamar/malam : Rp. {harga},-</h4>
          <p>tidak termasuk biaya pengobatan/pemeriksaan</p>
          <button className="btn" onClick={toggleRoomDetail}>
            {`${showRoomDetail ? "tutup " : "buka "}detail fasilitas kamar`}
          </button>
        </div>
        <div className="image">
          <img src={`/assets/images/pilihan-kamar/${img}`} alt="class" />
        </div>
      </div>
      {showRoomDetail && (
        <div className="rawat-inap-detail">
          <ul>
            {fasilitas.map((item, index) => {
              return (
                <li key={index}>
                  <p> &#10003;</p> <h5>{item}</h5>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
