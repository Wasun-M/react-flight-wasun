import "../App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Allfunction from "../functions/function"

const Report3 = function () {
    const server = window.$servername;
    const [flights, setflights] = useState([]);

    useEffect(function () {
        getCarrier();
    }, [])

    const getCarrier = function () {
        Axios.get(`${server}/getAircraftTypeAndCarrier`).then((response) => {
            console.log(response.data)
            setflights(response.data);
        });
    };

    return (
        <div className="App container">
            <h1>Flight Report3</h1>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Carrier</th>
                        <th>AircraftType</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((e) => {
                        let rawData = {
                            "id": e.id,
                            "Carrier": e.carrier,
                            "AircraftType": e.aircraft_type,
                            "d1": 0,
                            "d2": 0,
                            "d3": 0,
                            "d4": 0,
                            "d5": 0,
                            "d6": 0,
                            "d7": 0,
                        }
                        e.Data.map((a) => {
                            rawData[`d${a}`] += 1;
                        })
                        return (
                            <tr key={rawData.id}>
                                <td>{rawData.Carrier}</td>
                                <td>{rawData.AircraftType}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d1)}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d2)}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d3)}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d4)}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d5)}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d6)}</td>
                                <td>{Allfunction.checkParseToEmpty(rawData.d7)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Report3;