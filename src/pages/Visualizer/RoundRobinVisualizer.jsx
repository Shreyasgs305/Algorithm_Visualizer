import React from "react";
import { useState } from "react";
import { runRoundRobin } from "../../algorithms/os/roundRobin";
import RoundRobinAnimate from "../../visualizers/RoundRobinAnimate";
import RoundRobinInfo from "../informations/RoundRobin";

function RoundRobinVisualizer() {
  const [arrivalTime, SetArrival] = useState("");
  const [burstTime, SetBurst] = useState("");
  const [timeQuantum, SetQuantum] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrivalArray = arrivalTime.split(",").map(Number);
    const burstArray = burstTime.split(",").map(Number);
    const quantum = Number(timeQuantum);

    const result = runRoundRobin(arrivalArray, burstArray, quantum);

    setData(result);
    setTimeout(() => {
      document.getElementById("output-section").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <h2 className="text-center mt-5">Operating System Algorithms</h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading">Round Robin Scheduling</p>
        <hr />

        <div className="fcfsinput">
          <div className="row ">
            <h3>Input</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="ArrivalTime" className="form-label">
                  Arrival Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ArrivalTime"
                  placeholder="0,0,0"
                  value={arrivalTime}
                  onChange={(e) => SetArrival(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="BurstTime" className="form-label">
                  Burst Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="BurstTime"
                  placeholder="5,3,4"
                  value={burstTime}
                  onChange={(e) => SetBurst(e.target.value)}
                  required
                />
              </div>

              <div className="mb-1">
                <label htmlFor="Quantum" className="form-label">
                  Time Quantum
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Quantum"
                  placeholder="2"
                  value={timeQuantum}
                  onChange={(e) => SetQuantum(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-center mt-4">
                <button
                  className="btn btn-primary rounded-5 px-4"
                  type="submit"
                >
                  SOLVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {data && (
        <div className="container" id="output-section">
          <h2>OutPut:</h2>
          <hr />

          {/* Gantt Chart */}
          <h3>Gantt Chart</h3>
          {data && <RoundRobinAnimate data={data} />}

          {/* Table */}
          <div className="container fcfcTable">
            <table
              style={{
                textAlign: "center",
                width: "75%",
                marginTop: "70px",
                borderCollapse: "collapse",
              }}
              border="1"
            >
              <thead style={{ background: "#009FFF", color: "white" }}>
                <tr>
                  <th>Process</th>
                  <th>Arrival Time</th>
                  <th>Burst Time</th>
                  <th>TAT</th>
                  <th>WT</th>
                  <th>RT</th>
                </tr>
              </thead>

              <tbody>
                {data.Arrival.map((_, index) => (
                  <tr key={index}>
                    <td>P{index + 1}</td>
                    <td>{data.Arrival[index]}</td>
                    <td>{data.Burst[index]}</td>
                    <td>{data.TAT[index]}</td>
                    <td>{data.WT[index]}</td>
                    <td>{data.RT[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Averages */}
          <br />
          <div className="container text-end me-1 bg-light">
            <div>Time Quantum : {timeQuantum}</div>
            <br />
            <div>
              Average Turn Around Time:{" "}
              <b>
                {(
                  data.TAT.reduce((sum, value) => sum + value, 0) /
                  data.TAT.length
                ).toFixed(2)}
                <span>ms</span>
              </b>
            </div>

            <div>
              <br />
              Average Waiting Time:{" "}
              <b>
                {(
                  data.WT.reduce((sum, value) => sum + value, 0) /
                  data.WT.length
                ).toFixed(2)}
                <span>ms</span>
              </b>
            </div>
          </div>
        </div>
      )}
      <RoundRobinInfo />
    </>
  );
}

export default RoundRobinVisualizer;
