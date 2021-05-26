import "../App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Allfunction from "../functions/function"

const Report4 = function () {
    const server = window.$servername;
    const [flights, setflights] = useState([]);

    useEffect(function () {
        getWeekAndTimes();
    }, [])

    const getWeekAndTimes = function () {
        Axios.get(`${server}/getWeekdayAndCarrier`).then((response) => {
            let resultData = [];
            response.data.map(function (e) {
                e.Data.map(function (g) {
                    resultData.push(g);
                })
            })
            setflights(resultData);
        });
    };

    const dayofweeks = [1, 2, 3, 4, 5, 6, 7]
    const mapofDays = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",
    }

    return (
        <div className="App container">
            <h1>Flight Report4</h1>
            <table className="table table-striped table-hover" >
                <thead>
                    <tr>
                        <th className="Border-th">WeekDay</th>
                        <th className="Border-th">Carrier</th>
                        <th className="Border-th">00</th>
                        <th className="Border-th">01</th>
                        <th className="Border-th">02</th>
                        <th className="Border-th">03</th>
                        <th className="Border-th">04</th>
                        <th className="Border-th">05</th>
                        <th className="Border-th">06</th>
                        <th className="Border-th">07</th>
                        <th className="Border-th">08</th>
                        <th className="Border-th">09</th>
                        <th className="Border-th">10</th>
                        <th className="Border-th">11</th>
                        <th className="Border-th">12</th>
                        <th className="Border-th">13</th>
                        <th className="Border-th">14</th>
                        <th className="Border-th">15</th>
                        <th className="Border-th">16</th>
                        <th className="Border-th">17</th>
                        <th className="Border-th">18</th>
                        <th className="Border-th">19</th>
                        <th className="Border-th">20</th>
                        <th className="Border-th">21</th>
                        <th className="Border-th">22</th>
                        <th className="Border-th">23</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((e, index) => {
                        let rawData = {
                            "id": e.id,
                            "Day": mapofDays[e.Day],
                            "Carrier": e.Key,
                            "d0": 0,
                            "d1": 0,
                            "d2": 0,
                            "d3": 0,
                            "d4": 0,
                            "d5": 0,
                            "d6": 0,
                            "d7": 0,
                            "d8": 0,
                            "d9": 0,
                            "d10": 0,
                            "d11": 0,
                            "d12": 0,
                            "d13": 0,
                            "d14": 0,
                            "d15": 0,
                            "d16": 0,
                            "d17": 0,
                            "d18": 0,
                            "d19": 0,
                            "d20": 0,
                            "d21": 0,
                            "d22": 0,
                            "d23": 0
                        }
                        e.times.map(function (t, index) {
                            rawData[`d${t}`] += 1;
                        })
                        return (
                            <tr key={rawData.id}>
                                <td className="Border-td">{rawData.Day}</td>
                                <td className="Border-td">{rawData.Carrier}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d0)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d1)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d2)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d3)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d4)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d5)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d6)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d7)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d8)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d9)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d10)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d11)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d12)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d13)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d14)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d15)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d16)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d17)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d18)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d19)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d20)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d21)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d22)}</td>
                                <td className="Border-td">{Allfunction.checkParseToEmpty(rawData.d23)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Report4;