import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio5() {
  const cachorro = {
    acao: "latir",
    latir() {
      console.log(this.acao);
    },
  };

  console.log("----- Primeira chamada -----");
  cachorro.latir();

  console.log("----- Segunda chamada -----");
  let acao = cachorro.latir.bind(cachorro);
  acao();

  return (
    <Card title="Exercício 5">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          Qual a impressão do código abaixo e qual a solução?
        </h6>

        <div className="card-box-content-exercise--answer">
          <h6>Resposta:</h6>
          <p>
            Quando testamos o código mencionado nesse exercício é impresso na
            primeira chamada ao método acao é a string "latir" e a segunda
            chamada undefined.
          </p>

          <p>
            Quando criamos uma variável e passamos o método latir e invocamos
            esse método, dá undefined porque o "this" não se refere mais ao
            objeto "cachorro" e sim a nova função criada, e ai não acessa mais o
            método dentro de "cachorro".
          </p>

          <p>
            Uma solução para corrigir esse problema é usando o método "bind()"
            depois da atribuição da variável "acao".
          </p>

          <p>
            Veja o resultado no <strong>Console Log</strong>.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio5;
