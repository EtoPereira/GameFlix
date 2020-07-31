import React from "react";
import TemplateDefault from "../../components/TemplateDefault";
import { Link } from "react-router-dom";

const CadastroCategoria = () => {
  return (
      <TemplateDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/cadastro/video">Cadastrar video</Link>
      </TemplateDefault>

  );
};

export default CadastroCategoria;
