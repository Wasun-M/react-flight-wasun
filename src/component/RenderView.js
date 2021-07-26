import "../../src/App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Flights from './Flights';
import Report1 from './Report1';
import Report2 from './Report2';
import Report3 from './Report3';
import Report4 from './Report4';
import Navbar from './Navbar';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const RenderView = () => {
    return (
        <div className="main-view">
            <Navbar />
            <Switch>
                <Route path='/' exact component={Flights} />
                <Route path='/report1' component={Report1} />
                <Route path='/report2' component={Report2} />
                <Route path='/report3' component={Report3} />
                <Route path='/report4' component={Report4} />
            </Switch>
        </div>
    );
}


export default RenderView;