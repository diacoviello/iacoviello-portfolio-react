import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/projects"]}>
            <Projects />
          </Route>
          <Route exact path={["/resume"]}>
            <Resume />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
