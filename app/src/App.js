import './App.css';
import Navbar from './components/Navbar/navbar';
import Landing from "./pages/Landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Navbar />
      <Router>
        <Switch>

          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/developments" component={developments} />
          <Route exact path="/inquiry" component={inquiry} />
          <Route exact path="/about" component={about} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
