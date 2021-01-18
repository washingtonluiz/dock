import React from "react";

//Components
import Card from "../../components/Card";

function Exercicio3() {
  // const data = {
  //   items: [{ value: 1 }, { value: 1 }],
  // };

  // function changeData(values) {
  //   let localData = { ...values };

  //   localData.items.map((i) => {
  //     i.value = 2;
  //   });

  //   return localData;
  // }

  // const newData = changeData(data);

  // console.log("data", data);
  // console.log("newData", newData);

  const data = {
    items: [{ value: 1 }, { value: 1 }],
  };

  function changeData(values) {
    let localData = JSON.parse(JSON.stringify({ ...values }));

    localData.items.map((i) => {
      i.value = 2;
    });

    return localData;
  }

  const newData = changeData(data);

  console.log(data, newData);
  return (
    <Card title="Exercício 3">
      <div className="card-box-content-exercise">
        <h6 className="font-weight-bold">
          Qual o erro do código abaixo e o qual seria uma possível correção ?
        </h6>

        <div className="card-box-content-exercise--answer">
          <h6>Resposta:</h6>
          <p>respostasssssss</p>
        </div>
      </div>
    </Card>
  );
}

export default Exercicio3;
