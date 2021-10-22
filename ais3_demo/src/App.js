import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Summary from "./components/summary";
import CreateDU from "./components/createDU";

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
