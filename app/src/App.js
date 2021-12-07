import './App.css';
import Navbar from './components/Navbar/navbar';
import Landing from "./pages/Landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Suggestions from "../src/pages/Suggestions";

function App() {
  return (
    <>

      <Navbar />
      <Router>
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route exact path="/suggestions" component={Suggestions} />
          {/* <Route exact path="/inquiry" component={contact} />
          <Route exact path="/about" component={Apps} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
