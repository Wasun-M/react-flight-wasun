import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Flight Infomation</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/" to='/'>Flights</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/report1" to='/report1'>Report1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/report2" to='/report2'>Report2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/report3" to='/report3'>report3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/report4" to='/report4'>report4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
