import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio4() {
  return (
    <Card title="Exercício 4">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          Na construção de uma classe, ES5 ou superior, qual o melhor método
          para encapsular os atributos da classe ? Exemplifique.
        </h6>

        <div className="card-box-content-exercise--answer">
          <h6>Resposta:</h6>
          <p>
            Uma das formas de encapsular um atributo numa classe em javascript é
            utilizar os métodos getters e setters dentro da classe.
          </p>
          <p>
            O exemplo abaixo mostra como deve ser feita esta implementação, a
            variável deve ser declarada dentro do constructor e os métodos fazem
            acesso as variáveis.
          </p>

          <div className="border p-3 rounded bg-light">
            <pre>
              <strong>{`class Pessoa {
  constructor () {
    this.id = Math.floor(Math.random()*10)
    this._numeroArtigos = 0
  }
  
  get id () {
    return this._id
  }
  
  get artigos () {
    return this._numeroArtigos
  }
  
  incrementarArtigos () {
    this._numeroArtigos++
  }
}`}</strong>
            </pre>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio4;
