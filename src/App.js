import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Header from "./components/Header";

//Views
import Index from "./views/index";
import Exercicio1 from "./views/Exercicio1";
import Exercicio2 from "./views/Exercicio2";
import Exercicio3 from "./views/Exercicio3";
import Exercicio4 from "./views/Exercicio4";
import Exercicio5 from "./views/Exercicio5";
import Exercicio6 from "./views/Exercicio6";
import Exercicio7 from "./views/Exercicio7";

function App() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <Router>
      <main className={`main d-flex ${theme}`}>
        <Header changeTheme={changeTheme} nameTheme={theme} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/exercicio-1" component={Exercicio1} />
            <Route path="/exercicio-2" component={Exercicio2} />
            <Route path="/exercicio-3" component={Exercicio3} />
            <Route path="/exercicio-4" component={Exercicio4} />
            <Route path="/exercicio-5" component={Exercicio5} />
            <Route path="/exercicio-6" component={Exercicio6} />
            <Route path="/exercicio-7" component={Exercicio7} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
