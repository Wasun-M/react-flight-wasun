import "../App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const Report4 = function () {
    const server = "http://localhost:3001";
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
            <table className="table" >
                <thead>
                    <th>WeekDay</th>
                    <th>Carrier</th>
                    <th>00</th>
                    <th>01</th>
                    <th>02</th>
                    <th>03</th>
                    <th>04</th>
                    <th>05</th>
                    <th>06</th>
                    <th>07</th>
                    <th>08</th>
                    <th>09</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
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
                                <td>{rawData.Day}</td>
                                <td>{rawData.Carrier}</td>
                                <td>{rawData.d0}</td>
                                <td>{rawData.d1}</td>
                                <td>{rawData.d2}</td>
                                <td>{rawData.d3}</td>
                                <td>{rawData.d4}</td>
                                <td>{rawData.d5}</td>
                                <td>{rawData.d6}</td>
                                <td>{rawData.d7}</td>
                                <td>{rawData.d8}</td>
                                <td>{rawData.d9}</td>
                                <td>{rawData.d10}</td>
                                <td>{rawData.d11}</td>
                                <td>{rawData.d12}</td>
                                <td>{rawData.d13}</td>
                                <td>{rawData.d14}</td>
                                <td>{rawData.d15}</td>
                                <td>{rawData.d16}</td>
                                <td>{rawData.d17}</td>
                                <td>{rawData.d18}</td>
                                <td>{rawData.d19}</td>
                                <td>{rawData.d20}</td>
                                <td>{rawData.d21}</td>
                                <td>{rawData.d22}</td>
                                <td>{rawData.d23}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Report4;