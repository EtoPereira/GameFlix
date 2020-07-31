import React from "react";
import TemplateDefault from "../../components/TemplateDefault";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
      <TemplateDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/cadastro/categoria">Cadastrar categoria</Link>
      </TemplateDefault>

  );
};

export default Cadastro;
