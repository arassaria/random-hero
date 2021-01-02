import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <Route path="/overwatch/tank">
          <Tank />
        </Route>
        <Route path="/overwatch/dps">
          <DPS />
        </Route>
        <Route path="/overwatch/support">
          <Support />
        </Route>
        <Route path="/overwatch">
          <Overwatch />
        </Route>
        <Router path="/">
          <div>
            <Link to="/overwatch">Overwatch</Link>
          </div>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
