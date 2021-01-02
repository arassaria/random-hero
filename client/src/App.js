import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Overwatch from "./pages/Menu";
import Hero from "./pages/Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/:role">
          <Hero />
        </Route>
        <Route path="/">
          <Overwatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
