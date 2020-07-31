import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import CadastroVideo from './pages/Cadastro'
import CadastroCategoria from './pages/Categoria'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App}  exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={()=>(<div>404 Página não encontrada</div>)}/>
    </Switch>
  );
};

export default Routes;
