import React from "react";
import "./styles/image.css";
import logo from "../assets/perfil.jpg";

const Image = () => {
  return (
    <div className="profile">
      <img className="img-profile" src={logo} alt="profile" />
    </div>
  );
};

export default Image;
