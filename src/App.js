import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Header from "./components/Header";
import Index from "./views/index";

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
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
