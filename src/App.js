import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Header from "./components/Header";
import Index from "./views/index";

function App() {
  return (
    <Router>
      <main className="main d-flex">
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
