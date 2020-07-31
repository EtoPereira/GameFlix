import React from "react";
import TemplateDefault from "../../components/TemplateDefault";
import { Link } from "react-router-dom";

const CadastroVideo = () => {
  return (
      <TemplateDefault>
        <h1>Cadastro de Video</h1>

        <Link to="/cadastro/categoria">Cadastrar categoria</Link>
      </TemplateDefault>

  );
};

export default CadastroVideo;
