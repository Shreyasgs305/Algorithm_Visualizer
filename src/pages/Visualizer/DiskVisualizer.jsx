import { useState } from "react";
import DiskAnimate from "../../visualizers/DiskAnimate";

import { runDiskFCFS } from "../../algorithms/os//diskFcfs";
import { runDiskSSTF } from "../../algorithms/os/diskSstf";
import { runDiskSCAN } from "../../algorithms/os/diskScan";
import { runDiskCSCAN } from "../../algorithms/os/diskCscan";
import { runDiskLOOK } from "../../algorithms/os/diskLook";
import FCFSDiskInfo from "../informations/DiskInfo/FCFSInfo";
import SSTFDiskInfo from "../informations/DiskInfo/SSTFInfo";
import SCANDiskInfo from "../informations/DiskInfo/SCANInfo";
import CSCANDiskInfo from "../informations/DiskInfo/C-SCANInfo";
import LOOKDiskInfo from "../informations/DiskInfo/LOOKInfo";

function DiskVisualizer({ algo }) {
  const [algorithm, setAlgorithm] = useState(algo);
  const [requests, setRequests] = useState("");
  const [head, setHead] = useState("");
  const [direction, setDirection] = useState("right");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reqArray = requests.split(",").map(Number);
    const headNum = Number(head);
    const diskSize = 200;

    let result;

    switch (algorithm) {
      case "FCFS":
        result = runDiskFCFS(reqArray, headNum);
        break;
      case "SSTF":
        result = runDiskSSTF(reqArray, headNum);
        break;
      case "SCAN":
        result = runDiskSCAN(reqArray, headNum, diskSize, direction);
        break;
      case "C-SCAN":
        result = runDiskCSCAN(reqArray, headNum, diskSize);
        break;
      case "LOOK":
        result = runDiskLOOK(reqArray, headNum, direction);
        break;
      default:
        return;
    }

    setData(result);
    setTimeout(() => {
      document.getElementById("output-section").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <h2 className="text-center mt-5">Disk Scheduling Algorithms</h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading">{algorithm} Algorithm</p>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Input</h3>

            <form onSubmit={handleSubmit}>
              {/* Algorithm Select */}
              <div className="mb-3">
                <label className="form-label">Select Algorithm</label>
                <select
                  className="form-control"
                  value={algorithm}
                  onChange={(e) => setAlgorithm(e.target.value)}
                >
                  <option value="FCFS">FCFS</option>
                  <option value="SSTF">SSTF</option>
                  <option value="SCAN">SCAN</option>
                  <option value="C-SCAN">C-SCAN</option>
                  <option value="LOOK">LOOK</option>
                </select>
              </div>

              {/* Requests */}
              <div className="mb-3">
                <label className="form-label">Disk Requests</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="82,170,43,140,24"
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  required
                />
              </div>

              {/* Head Position */}
              <div className="mb-3">
                <label className="form-label">Initial Head Position</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="50"
                  value={head}
                  onChange={(e) => setHead(e.target.value)}
                  required
                />
              </div>

              {/* Direction */}
              {(algorithm === "SCAN" || algorithm === "LOOK") && (
                <div className="mb-3">
                  <label className="form-label">Direction</label>
                  <select
                    className="form-control"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                  >
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                  </select>
                </div>
              )}

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

      {/* OUTPUT SECTION */}
      {data && (
        <div className="container " id="output-section">
          <h2>Output:</h2>
          <hr />

          {/* Animation */}
          <h3>Head Movement</h3>
          <div className="container text-center">
            <DiskAnimate sequence={data.sequence} />
          </div>
          {/* Sequence Table */}
          <div className="d-flex justify-content-center mt-5">
            <table
              style={{
                textAlign: "center",
                width: "75%",
                marginTop: "30px",
                borderCollapse: "collapse",
              }}
              border="1"
            >
              <thead style={{ background: "#009FFF", color: "white" }}>
                <tr>
                  <th>Step</th>
                  <th>Track Position</th>
                </tr>
              </thead>

              <tbody>
                {data.sequence.map((value, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Seek */}
          <div className="container text-end mt-4 bg-light p-3">
            <h5>
              Total Seek Time: <b>{data.totalSeek}</b>
            </h5>
            <h5>
              Average Seek Time:{" "}
              <b>{(data.totalSeek / (data.sequence.length - 1)).toFixed(2)}</b>
            </h5>
          </div>
        </div>
      )}

      {algorithm === "FCFS" ? (
        <FCFSDiskInfo />
      ) : algorithm === "SSTF" ? (
        <SSTFDiskInfo />
      ) : algorithm === "SCAN" ? (
        <SCANDiskInfo />
      ) : algorithm === "C-SCAN" ? (
        <CSCANDiskInfo />
      ) : algorithm === "LOOK" ? (
        <LOOKDiskInfo />
      ) : null}
    </>
  );
}

export default DiskVisualizer;
