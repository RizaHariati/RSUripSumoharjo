import React, { useState } from "react";

const About = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <div className="about-container">
      <div
        className="about-background"
        style={{
          background:
            "linear-gradient(270deg, transparent, white), url('/assets/images/slider2.jpg') center/cover no-repeat",
        }}
      ></div>

      <div className="about-content">
        <h1>Tentang Urip Sumoharjo</h1>
        <div className="line"></div>
        <h4>
          RS Urip Sumoharjo Merupakan RS Swasta dengan semangat Islami, yang
          menyediakan pelayanan kesehatan untuk semua kalangan sebagai bagian
          dari rahmat untuk alam semesta
        </h4>
        <h4>
          Telah beroperasi sejak tanggal 10 September 2001 dan sesuai dengan
          Keputusan Menteri Kesehatan RI No. 492/menkes/SK/V/2008, RS Urip
          Sumoharjo saat ini merupakan rumah sakit swasta utama setara tipe B
          Non Pendidikan
        </h4>
      </div>
      <div className="about-details">
        {data.map((item) => {
          const { id, info, title } = item;
          return (
            <div key={id} className="rule-container">
              <div className="rule-header">
                <h4>{title}</h4>
                <button
                  onClick={() => {
                    toggle(id);
                  }}
                >
                  <i
                    className={selected === id ? `fa fa-minus` : `fa fa-plus`}
                  ></i>
                </button>
              </div>
              {selected === id && (
                <div className="about-info">
                  {info.map((infoItem, index) => {
                    return <h4 key={index}>{infoItem}</h4>;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;

const data = [
  {
    id: 1,
    title: "Visi",
    info: ["Menjadi rumah sakit rujukan di Sumatera bagian Selatan."],
  },

  {
    id: 2,
    title: "Misi",
    info: [
      "Menyelenggarakan Pelayanan Kesehatan yang bermutu, ramah dan profesional",
      "Menyelenggarakan pelayanan kesehatan secara cepat, tepat, dan informatif",
      "Menyelenggarakan pelayanan kesehatan yang berorientasi pada perkembangan tekhnologi",
      "Mengembangkan profesionalisme Sumber Daya Manusia yang berkesinambungan hingga mampu bersaing ditingkat taraf nasional",
    ],
  },
  {
    id: 3,
    title: "Filosofi",
    info: ["Bekerja sambil beramal dan berobat sambil beramal"],
  },
  {
    id: 4,
    title: "Akreditasi",
    info: [
      "Status Akriditasi Tingkat Paripurna Nomor : KARS-SERT/ 670/ III/ 2017.",
    ],
  },
  {
    id: 5,
    title: "Penghargaan",
    info: [
      "Penghargaan dari Jamsostek sebagai RS yang tertib Administrasi dan pelayanan terbaik se Sumbagsel",
      "Penghargaan dari BPJS Ketenagakerjaan sebagai RS yang tertib dalam Pembayaran iuran",
    ],
  },
];
