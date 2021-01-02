import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Overwatch from "./pages/overwatch";
import Tank from "./pages/Tank";
import DPS from "./pages/DPS";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/tank">
          <Tank />
        </Route>
        <Route path="/dps">
          <DPS />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/">
          <Overwatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
