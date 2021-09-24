import React, { useState, useEffect } from "react";
import { home_slider } from "../data/data_menu";

const Home = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index > home_slider.length - 1) {
      setIndex(1);
    } else if (index < 1) {
      setIndex(home_slider.length - 1);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    setIndex(index + 1);
  };
  const handlePrev = () => {
    setIndex(index - 1);
  };
  return (
    <div className="home">
      <div className="home-images">
        {home_slider.map((slide) => {
          const { id } = slide;
          let position = "before";
          if (id === index) {
            position = "active";
          } else if (
            index === id - 1 ||
            (id === 1 && index === home_slider.length - 1)
          ) {
            position = "after";
          }
          return <HomeImage key={id} {...slide} position={position} />;
        })}
        <div className="home-btn-container">
          <button className="arrow next" onClick={handleNext}>
            <i className="fa fa-chevron-right"></i>
          </button>
          <button className="arrow prev" onClick={handlePrev}>
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
      </div>
      <div className="home-intro">
        <h2>Bekerja dan mengobati sambil beramal </h2>
        <h3>
          Dengan semangat Islami, yang menyediakan pelayanan kesehatan untuk
          semua kalangan sebagai bagian dari rahmat untuk alam semesta
        </h3>
        <img src="/assets/images/wave2.jpg" alt="wave" />
      </div>
    </div>
  );
};

export default Home;

const HomeImage = ({ img, color, text, title1, title2, position }) => {
  return (
    <div
      className={`home-image ${position}`}
      style={{
        background: `radial-gradient(transparent, transparent,transparent,transparent, #00000a06), url('/assets/images/home/${img}') center/cover no-repeat`,
      }}
    >
      <div className="home-welcome" style={{ color: `${color}` }}>
        <div className="home-title">
          <h1>{title1}</h1>
          <h2>{title2}</h2>
        </div>
        <div className="home-text">
          <h4>{text}</h4>
        </div>
      </div>
    </div>
  );
};
