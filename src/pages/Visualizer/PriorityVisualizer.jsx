import React from "react";
import { useState } from "react";
import { runPriorityNonPreemptive } from "../../algorithms/os/priorityNonPreemptive";
import { runPriorityPreemptive } from "../../algorithms/os/priorityPreemptive";
import PriorityAnimate from "../../visualizers/PriorityAnimate";
import NonPreemptivePriorityInfo from "../informations/NonPrePriority";
import PreemptivePriorityInfo from "../informations/prePriority";

function PriorityVisualizer() {
  const [arrivalTime, setArrival] = useState("");
  const [burstTime, setBurst] = useState("");
  const [priorityValue, setPriority] = useState("");
  const [mode, setMode] = useState("non");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrivalArray = arrivalTime.split(",").map(Number);
    const burstArray = burstTime.split(",").map(Number);
    const priorityArray = priorityValue.split(",").map(Number);

    const result =
      mode === "non"
        ? runPriorityNonPreemptive(arrivalArray, burstArray, priorityArray)
        : runPriorityPreemptive(arrivalArray, burstArray, priorityArray);

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
        <p className="fcfsHeading">Priority Scheduling</p>
        <hr />

        <div className="fcfsinput">
          <div className="row">
            <h3>Input</h3>

            <form onSubmit={handleSubmit}>
              {/* Mode Selection */}
              <div className="mb-3">
                <label className="form-label">Select Type</label>
                <select
                  className="form-select"
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                >
                  <option value="non">Non-Preemptive</option>
                  <option value="pre">Preemptive</option>
                </select>
              </div>

              {/* Arrival */}
              <div className="mb-3">
                <label className="form-label">Arrival Time</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0,1,2"
                  value={arrivalTime}
                  onChange={(e) => setArrival(e.target.value)}
                  required
                />
              </div>

              {/* Burst */}
              <div className="mb-3">
                <label className="form-label">Burst Time</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="6,8,7"
                  value={burstTime}
                  onChange={(e) => setBurst(e.target.value)}
                  required
                />
              </div>

              {/* Priority */}
              <div className="mb-1">
                <label className="form-label">
                  Priority (Smaller number = Higher priority)
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="2,1,3"
                  value={priorityValue}
                  onChange={(e) => setPriority(e.target.value)}
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
          <PriorityAnimate data={data} />

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
              <thead style={{ background: "#FF9800", color: "white" }}>
                <tr>
                  <th>Process</th>
                  <th>Arrival Time</th>
                  <th>Burst Time</th>
                  <th>Priority</th>
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
                    <td>{data.Priority[index]}</td>
                    <td>{data.TAT[index]}</td>
                    <td>{data.WT[index]}</td>
                    <td>{data.RT[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Average Section */}
          <div className="container text-end me-1 bg-light">
            <div>
              <br />
              Average Turn Around Time:{" "}
              <b>
                {(
                  data.TAT.reduce((sum, value) => sum + value, 0) /
                  data.TAT.length
                ).toFixed(2)}
                <span> ms</span>
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
                <span> ms</span>
              </b>
            </div>
          </div>
        </div>
      )}
      {mode === "non" ? (
        <NonPreemptivePriorityInfo />
      ) : (
        <PreemptivePriorityInfo />
      )}
    </>
  );
}

export default PriorityVisualizer;
