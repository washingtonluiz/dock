import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio2() {
  return (
    <Card title="Exercício 2">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          No seu projeto, com webpack 5, será necessário utilizar variáveis de
          ambiente, qual a maneira correta de implementar ?
        </h6>

        <div className="answer">
          <h6>Resposta:</h6>
          <p>{`new webpack.DefinePlugin({ 'process.env': { 'KEY': value }}})`}</p>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio2;
