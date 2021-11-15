import React, { useEffect, useRef, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useGlobalContext } from "../context";
import { home_slider } from "../data/data_menu";
const Promo = () => {
  const { isPromo, setIsPromo, showModal } = useGlobalContext();
  const [newUrl, setNewUrl] = useState("");
  const { url } = useRouteMatch();
  const data = home_slider.slice(2, 4);

  useEffect(() => {
    if (url === "/") {
      setNewUrl("/home");
    }
  }, [url]);
  const refPromo = useRef(null);
  useEffect(() => {
    if (isPromo) {
      refPromo.current.style.height = "18rem";
    } else {
      refPromo.current.style.height = "0rem";
    }
  }, [isPromo]);
  return (
    <div className="promo" ref={refPromo} onWheel={() => setIsPromo(false)}>
      <div className="promo-header">
        <h4>
          <i className="fa fa-exclamation-triangle"></i>
          Informasi mengenai COVID-19
        </h4>
        <button className="promo-btn" onClick={() => setIsPromo(!isPromo)}>
          <i
            className={isPromo ? `fa fa-chevron-up` : `fa fa-chevron-down`}
          ></i>
        </button>
      </div>
      <div className="promo-info-container">
        <h3>PPKM (Promo Peduli Kesehatan Masyarakat)</h3>
        <div className="promo-infos">
          {data.map((item) => {
            const { index, title1, title2, img } = item;
            return (
              <Link
                key={index}
                to={`${newUrl}/checkup`}
                onClick={() => showModal(index)}
              >
                <div
                  className="promo-info vaksin"
                  style={{
                    background: `linear-gradient(-45deg, transparent, #ffffff65, white), url('/assets/images/home/${img}') center/cover no-repeat`,
                  }}
                >
                  <div className="promo-info-text">
                    <h4>{title1}</h4>
                    <h4>{title2}</h4>
                    <p>read more...</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Promo;
