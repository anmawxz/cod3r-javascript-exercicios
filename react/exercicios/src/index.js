import React from "react";
import ReactDOM from "react-dom";

import Pai from './components/Pai'
import Filho from './components/Filho'
import Saudacao from './components/Saudacao'
import { BoaTarde, BoaNoite} from './components/Multiplos'
import BomDia from './components/BomDia'

// ReactDOM.render(<h1>React 2</h1>, document.getElementById('root')) //depreciado

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    {/* <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai> */}


    {/* <BomDia nome="Gustavo"/> */}


    <BoaTarde nome="Marildes"/>
    <BoaNoite nome="Marina"/>
  </div>
);
