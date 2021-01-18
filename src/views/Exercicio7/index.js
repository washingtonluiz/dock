import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio7() {
  return (
    <Card title="Exercício 7">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          Qual o conceito de pseudo-elements? Exemplifique
        </h6>

        <div className="card-box-content-exercise--answer">
          <h6>Resposta:</h6>
          <p>
            A idéia de se utilizar pseudos-elementos é de que podemos estilizar
            uma parte específica de qualquer elemento que escolhemos, vejamos o
            exemplo abaixo com um dos pseudos-elementos que é o{" "}
            <strong> input::placeholder</strong>:
          </p>

          <div className="card-box-content-exercise--example-7 mt-4 mb-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Qual foi a minha nota ?"
              />
            </div>
          </div>

          <p>
            Podemos estilizar todos os inputs com uma parte específica deles
            como a cor, estilo da font, font etc.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio7;
