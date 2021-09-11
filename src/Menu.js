import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { main_menu } from "./data/data_menu";
import { useGlobalContext } from "./context";
const Menu = ({ url }) => {
  const { setTerm, hideDokterList } = useGlobalContext();
  const [newUrl, setNewUrl] = useState("");
  const handleClick = () => {
    setTerm({ termName: "all", key: "all" });
    hideDokterList();
  };
  useEffect(() => {
    if (url === "/") {
      setNewUrl("/home");
    } else {
      setNewUrl(url);
    }
  }, [url]);
  return (
    <>
      {main_menu.map((menu) => {
        const { id, url, title, icon, className } = menu;
        return (
          <Link
            key={id}
            to={`${newUrl}/${url}`}
            className={`ex-menu ${className}`}
            onClick={handleClick}
          >
            <i className={icon}></i>
            <h2>{title}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default Menu;
