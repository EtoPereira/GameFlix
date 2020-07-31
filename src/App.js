import React from "react";

import dados from "./data/dados_iniciais.json";

import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />
      <Carousel ignoreFirstVideo category={dados.categorias[0]} />

      <Footer />
    </>
  );
}

export default App;
