import React from "react";

import { Link } from 'react-router-dom'

import "./styles.css";
import Logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <div>
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="gameflix" />
      </Link>

      <Link className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Link>
    </nav>
    </div>
  );
};

export default Menu;
