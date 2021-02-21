import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/body/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Navigation />
            <Home />
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
