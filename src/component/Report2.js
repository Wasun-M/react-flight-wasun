import "../App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const Report2 = function () {
    const server = "https://heroku-wasun-flights.herokuapp.com";
    const [flights, setflights] = useState([]);

    useEffect(function () {
        getCarrier();
    }, [])

    const getCarrier = function () {
        Axios.get(`${server}/getAircraftType`).then((response) => {
            console.log(response.data)
            setflights(response.data);
        });
    };

    return (
        <div className="App container">
            <h1>Flight Report2</h1>
            <table className="table" >
                <thead>
                    <th>Carrier</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </thead>
                <tbody>
                    {flights.map((e) => {
                        //renderCarrier(e);
                        let rawData = {
                            "AircraftType": e.key,
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
                            <tr key={rawData.AircraftType}>
                                <td>{rawData.AircraftType}</td>
                                <td>{rawData.d1}</td>
                                <td>{rawData.d2}</td>
                                <td>{rawData.d3}</td>
                                <td>{rawData.d4}</td>
                                <td>{rawData.d5}</td>
                                <td>{rawData.d6}</td>
                                <td>{rawData.d7}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Report2;