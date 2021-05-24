import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Flights from './component/Flights';
import Report1 from './component/Report1';
import Report2 from './component/Report2';
import Report3 from './component/Report3';
import Report4 from './component/Report4';
import Navbar from './component/Navbar';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const server = "https://heroku-wasun-flights.herokuapp.com";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Flights} />
        <Route path='/report1' component={Report1} />
        <Route path='/report2' component={Report2} />
        <Route path='/report3' component={Report3} />
        <Route path='/report4' component={Report4} />
      </Switch>
    </Router>
  );
}

export default App;
