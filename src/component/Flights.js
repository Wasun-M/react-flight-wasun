import "../App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const Flights = function () {
    const server = window.$servername;
    const [search, setsearch] = useState({
        flight_type: '',
        fromdate: '',
        todate: '',
        carrier: '',
        flight_no: '',
        aircraft_type: ''
    });
    const [flights, setflights] = useState([]);

    useEffect(function () {
        getFlights();
    }, [])

    const getFlights = function () {
        Axios.get(`${server}/flights`).then((response) => {
            console.log(response.data);
            setflights(response.data);
        });
    };

    const formatDate = function (request) {
        let splitDate = request.split('T');
        let date = splitDate[0].replaceAll("-", "/");
        let timeArray = splitDate[1].split(':')
        let time = `${timeArray[0]}:${timeArray[1]}`
        let result = `${date} ${time}`;
        return result;
    }

    const searchFlughts = function () {
        Axios.post(`${server}/searchflight`, search).then(
            (response) => {
                console.log(response.data);
                setflights(response.data);
            }
        );
    }

    return (
        <div className="App container">
            <h1>Flight Infomation</h1>
            <div className="form-control">
                <div className="row">
                    <div className="col-4">
                        <label>FlightType</label>
                        <select className="form-control" name="flight_type"
                            onChange={function (e) {
                                const val = e.target.value;
                                setsearch(search => {
                                    return { ...search, flight_type: val }
                                });
                            }}>
                            <option value="0">กรุณาเลือก..</option>
                            <option value="1">Arrival</option>
                            <option value="2">Departure</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label>FromDate</label>
                        <input className="form-control" type="date" name="fromdate"
                            onChange={e => {
                                const val = e.target.value;
                                setsearch(search => {
                                    return { ...search, fromdate: val }
                                });
                            }}>
                        </input>
                    </div>
                    <div className="col-4">
                        <label>ToDate</label>
                        <input className="form-control" type="date" name="todate"
                            onChange={e => {
                                const val = e.target.value;
                                setsearch(search => {
                                    return { ...search, todate: val }
                                });
                            }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>Carrier</label>
                        <input className="form-control" type="text" name="carrier"
                            onChange={e => {
                                const val = e.target.value;
                                setsearch(search => {
                                    return { ...search, carrier: val }
                                });
                            }}></input>
                    </div>
                    <div className="col-4">
                        <label>FlightNo</label>
                        <input className="form-control" type="text" name="flight_no"
                            onChange={e => {
                                const val = e.target.value;
                                setsearch(search => {
                                    return { ...search, flight_no: val }
                                });
                            }}></input>
                    </div>
                    <div className="col-4">
                        <label>AircraftType</label>
                        <input className="form-control" type="text" name="aircraft_type"
                            onChange={e => {
                                const val = e.target.value;
                                setsearch(search => {
                                    return { ...search, aircraft_type: val }
                                });
                            }}></input>
                    </div>
                </div>
                <div className="row" style={{ "padding-bottom": "10px" }}>
                    <div className="col-4"></div>
                    <div className="col-4" style={{ paddingTop: "10px" }}><button type="button" onClick={() => { searchFlughts() }} className="btn btn-success" >ค้นหา</button></div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>FlightType</th>
                                <th>ScheduleDate</th>
                                <th>Carrier</th>
                                <th>FlightNo</th>
                                <th>AircraftType</th>
                                <th>Reg</th>
                                <th>Gate</th>
                                <th>Pos</th>
                                <th>Belt</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {flights.map((e) => {
                                return (
                                    <tr key={e.id}>
                                        <td>{e.flight_type}</td>
                                        <td>{formatDate(e.schedule_date)}</td>
                                        <td>{e.carrier}</td>
                                        <td>{e.flight_no}</td>
                                        <td>{e.aircraft_type}</td>
                                        <td>{e.reg}</td>
                                        <td>{e.gate}</td>
                                        <td>{e.pos}</td>
                                        <td>{e.belt}</td>
                                        <td>{e.remark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Flights;

