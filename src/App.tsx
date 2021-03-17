import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import MainContainer from "./components/main/main.container";
import StartPage from "./pages/start/start.container";
import MappingPage from "./pages/mapping/mapping.container";
import ResultPage from "./pages/result/result.container";

import "./App.scss";
import "./fonts/fonts.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <StartPage {...props} />}
          />
          <Route
            exact
            path="/mapping"
            render={(props) => <MappingPage {...props} />}
          />
          <Route
            exact
            path="/result"
            render={(props) => <ResultPage {...props} />}
          />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default App;
