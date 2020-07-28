import React from "react";
import Logo from "../../assets/logo.png";
import "./styles.css";

import Button from "../../components/Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="gameflix" />
      </a>

      <Button className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;
