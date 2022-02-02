import './App.css';
import React from "react"
import Navbar from './components/Navbar/navbar';
import Landing from "./pages/Landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/index";
import Apps from "./pages/Applications/index";
import SignUp from "./pages/SignUp/index";
import Notepad from "./pages/Notepad/index";
import Budget from "./pages/Budget/index";
import Calendar from "./pages/Calendar/index";
import Reminders from "./pages/Reminders/index";
import Timers from "./pages/Reminders/index"

import Suggestions from "./pages/Suggestions";

function App() {
  return (
    <>

      <Navbar />
      <Router>
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route exact path="/suggestions" component={Suggestions} />
          {/* <Route exact path="/inquiry" component={contact} /> */}
          <Route exact path="/Application" component={Apps} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Notepad" component={Notepad} />
          <Route exact path="/Budget" component={Budget} />
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/Reminders" component={Reminders} />
          <Route exact path="/Timers" component={Timers} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
