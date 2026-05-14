import React from "react";
import { useState } from "react";
import { runFCFS } from "../../algorithms/os/fcfs";
import FcfsAnimate from "../../visualizers/FcfsAnimate";
import FCFSInfo from "../informations/fsfs";

function FCFSVisualizer() {
  const [arrivalTime, SetArrival] = useState("");
  const [burstTime, SetBurst] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrivalArray = arrivalTime.split(",").map(Number);
    const burstArray = burstTime.split(",").map(Number);

    const result = runFCFS(arrivalArray, burstArray);

    setData(result);

    // Smooth scroll to output
    setTimeout(() => {
      const outputSection = document.getElementById("output-section");

      if (outputSection) {
        outputSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <>
      {/* Heading */}
      <h2 className="text-center mt-5 pt-5">Operating System Algorithms</h2>

      {/* Input Section */}
      <div className="container inputCategory my-5 pb-5 border rounded-5 shadow-sm">
        <p className="fcfsHeading">First Come First Serve</p>

        <hr />

        <div className="fcfsinput">
          <div className="row">
            <h3>Input</h3>

            <form onSubmit={handleSubmit}>
              {/* Arrival Time */}
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
                  onChange={(e) => {
                    const value = e.target.value;

                    // Allow only numbers and commas
                    if (/^[0-9,]*$/.test(value)) {
                      SetArrival(value);
                    }
                  }}
                  required
                />

                <div className="invalid-feedback">Please fill the input.</div>
              </div>

              {/* Burst Time */}
              <div className="mb-3">
                <label htmlFor="BurstTime" className="form-label">
                  Burst Time
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="BurstTime"
                  placeholder="3,3,27"
                  value={burstTime}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/^[0-9,]*$/.test(value)) {
                      SetBurst(value);
                    }
                  }}
                  required
                />

                <div className="invalid-feedback">Please fill the input.</div>
              </div>

              {/* Button */}
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

      {/* Output Section */}
      {data && (
        <div className="container my-5" id="output-section">
          <h2>Output</h2>

          <hr />

          {/* Gantt Chart */}
          <h3>Gantt Chart</h3>

          <FcfsAnimate data={data} />

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
              className="table table-bordered"
            >
              <thead
                style={{
                  background: "#009FFF",
                  color: "white",
                }}
              >
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

          {/* Average Times */}
          <div className="container text-end me-1 bg-light p-4 rounded-4 mt-4">
            <div>
              Average Turn Around Time:{" "}
              <b>
                {(
                  data.TAT.reduce((sum, value) => sum + value, 0) /
                  data.TAT.length
                ).toFixed(2)}

                <span> ms</span>
              </b>
            </div>

            <div className="mt-3">
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

      {/* Information Card */}
      <FCFSInfo />
    </>
  );
}

export default FCFSVisualizer;
