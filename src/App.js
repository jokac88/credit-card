import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/cards/Cards";

const App = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default App;
