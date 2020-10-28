import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
