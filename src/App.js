import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Flights from './component/Flights';
import Report1 from './component/Report1';
import Report2 from './component/Report2';
import Report3 from './component/Report3';
import Report4 from './component/Report4';
import Navbar from './component/Navbar';
import RenderView from './component/RenderView';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// const server = "https://heroku-wasun-flights.herokuapp.com";
const server = "http://localhost:3001";

function App() {
  return (
    <Router>
      <RenderView />
    </Router>
  );
}

export default App;
