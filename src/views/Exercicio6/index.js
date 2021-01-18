import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio6() {
  return (
    <Card title="Exercício 6">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          Exemplifique as principais diferenças entre o CSS2 e o CSS3.
        </h6>

        <div className="card-box-content-exercise--answer">
          <h6>Resposta:</h6>
          <p>
            Tivemos muitas diferenças nas versões 2 e 3 do css, podemos citar
            algumas das novas propriedades: <strong>nth-child</strong>,
            <strong> border-radius</strong>, <strong> @font-face</strong>,
            <strong> background-size</strong>, <strong> rgba</strong> etc.
          </p>
          <p>
            Tambem tivemos mudanças nos seletores:{" "}
            <strong>a[id="navbar"]</strong>,<strong> nth-child</strong>,
            <strong> ::first-letter</strong>, <strong> :focus</strong> e
            mostrarei na prática os seletores
            <strong> :after</strong> e <strong> :before</strong>. Veja o exemplo
            abaixo:
          </p>

          <div className="card-box-content-exercise--example-6 mt-4 mb-4">
            <h2>Passei no Teste</h2>
          </div>

          <p>
            Verificamos no exemplo acima que só precisamos de 1 elemento para
            criarmos esse efeito a partir dos novos seletores{" "}
            <strong> :after</strong> e <strong> :before</strong>.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio6;
