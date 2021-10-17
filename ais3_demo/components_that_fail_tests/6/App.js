import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Summary from "./components/description-unit/summary";
import CreateDU from "./components/description-unit/createDU";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/addNew">
          <CreateDU/>
        </Route>
        <Route exact patch="/">
          <Summary/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
