import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Cadastro from './pages/Cadastro'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App}  exact/>
      <Route path="/cadastro/video" component={Cadastro}/>
      <Route component={()=>(<div>404 Página não encontrada</div>)}/>
    </Switch>
  );
};

export default Routes;
