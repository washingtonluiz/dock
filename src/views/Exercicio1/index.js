import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio1() {
  return (
    <Card title="Exercício 1">
      <div className="form-group d-flex justify-content-between">
        <input
          type="text"
          className="form-control mx-2"
          id="set-string"
          placeholder="Insira uma string"
        />
        <button type="button" className="btn btn-primary ml-2 disabled">
          Enviar
        </button>
      </div>
      <div className="result mx-2 mt-4">
        <div className="result-content d-flex align-items-center mb-1">
          <h6 className="m-0">String Inserida: </h6>
          <span className="result-content--current-value mx-2"></span>
        </div>
        <div className="result-content d-flex">
          <h6 className="m-0">String Modificada: </h6>
          <span className="result-content--new-value mx-2"></span>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio1;
