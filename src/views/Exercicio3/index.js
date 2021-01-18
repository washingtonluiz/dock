import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio3() {
  const data = {
    items: [{ value: 1 }, { value: 1 }],
  };

  function changeData(values) {
    let localData = JSON.parse(JSON.stringify({ ...values }));

    localData.items.map((i) => {
      return (i.value = 2);
    });

    return localData;
  }

  const newData = changeData(data);

  console.log("Data: ", data);
  console.log("New Data: ", newData);
  return (
    <Card title="Exercício 3">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          Qual o erro do código abaixo e o qual seria uma possível correção ?
        </h6>

        <div className="card-box-content-exercise--answer">
          <h6>Resposta:</h6>
          <p>
            O erro do código se dá porque a função "changeData()" ao atribuir o
            valor a variavel "localData", acaba também alterando a variável
            "data", deixando ambos os objetos com o mesmo valor. Isto acontece
            porque foi feita uma cópia por referência.
          </p>
          <p>
            Para corrigir o problema alterei a forma que o programa copia o
            objeto, para que seja feita uma cópia por valor, onde é criado um
            novo endereço para a variável.
          </p>
          <p>
            Veja o resultado no <strong>Console Log</strong>.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio3;
