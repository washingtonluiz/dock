import React, { useState } from "react";

//Components
import Card from "../../components/Card";

function Exercicio1() {
  const [string, setString] = useState("");
  const [stringModified, setStringModified] = useState("");

  function handleChange(e) {
    const elem = e.target.value;

    if (elem === "") {
      setStringModified("");
    } else {
      setString(elem);
    }
  }

  function deleteSpecialCharacters(string) {
    return string.replace(/[^\d]+/g, "");
  }

  function sortfunction(a, b) {
    return a - b;
  }

  function transformString() {
    let modifiedString = Array.from(deleteSpecialCharacters(string))
      .sort(sortfunction)
      .filter((elem, index, self) => {
        return index === self.indexOf(elem);
      })
      .filter((elem) => {
        return elem % 2 === 0;
      });
    setStringModified(modifiedString);
  }

  return (
    <Card title="Exercício 1">
      <div className="form-group d-flex justify-content-between">
        <input
          type="text"
          className="form-control mx-2"
          id="set-string"
          placeholder="Insira uma string"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-primary ml-2 disabled"
          onClick={transformString}
        >
          Enviar
        </button>
      </div>

      {stringModified && string !== "" && (
        <div className="result mx-2 mt-4">
          <div className="result-content d-flex align-items-center mb-1">
            <h6 className="m-0">String Inserida: </h6>
            <span className="result-content--current-value mx-2">{string}</span>
          </div>
          <div className="result-content d-flex">
            <h6 className="m-0">String Modificada: </h6>
            <span className="result-content--new-value mx-2">{`[${stringModified}]`}</span>
          </div>
        </div>
      )}
    </Card>
  );
}

export default Exercicio1;
