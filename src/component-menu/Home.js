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
        <img src="/assets/images/wave2.svg" alt="wave" />
        <div className="home-box">
          <div className="line"></div>
          <h4>By Rizahariati for Azri Coding &#9400; 2021</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;

const HomeImage = ({ img, color, text, title1, title2, position }) => {
  return (
    // <div className={`home-image ${position}`}>
    <div
      className={`home-image ${position} `}
      // style={{
      //   background: `url('/assets/images/home/${img}') center/cover no-repeat`,
      // }}
    >
      <img
        src={`/assets/images/home/${img}`}
        alt={title1}
        className="home-image-background"
      />
      <img
        src={`/assets/images/home/${img}`}
        alt={title1}
        className="home-image-foreground"
      />
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
