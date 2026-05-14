import React from "react";

function SCANDiskInfo() {
  return (
    <>
      <div className="container mb-5">
        <div className="card shadow-lg border-0 rounded-5">
          {/* Header */}
          <div
            className="card-header text-white p-4"
            style={{
              background: "linear-gradient(to right, #009FFF, #005bea)",
            }}
          >
            <h2 className="fw-bold mb-0">💽 SCAN Disk Scheduling Algorithm</h2>
          </div>

          <div className="card-body p-5">
            {/* Definition */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📘 Definition</h3>

              <p className="fs-5 text-secondary mt-3">
                SCAN Disk Scheduling Algorithm is a disk scheduling technique in
                which the disk head moves in one direction and services all
                requests until it reaches the end of the disk.
              </p>

              <p className="fs-5 text-secondary">
                After reaching the end, the head reverses its direction and
                services requests in the opposite direction.
              </p>

              <div className="alert alert-primary mt-4">
                SCAN is also called the
                <b> Elevator Algorithm </b>
                because it works like an elevator moving up and down.
              </div>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">⚙️ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <ul className="fs-5">
                  <li>Disk head moves in one direction</li>
                  <li>All requests in that direction are serviced</li>
                  <li>Head reaches the disk end</li>
                  <li>Direction reverses and requests are serviced again</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Requests are processed while the head scans the disk in both
                  directions.
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📌 Example</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <h5>Request Queue</h5>

                <div className="alert alert-secondary">
                  98, 183, 37, 122, 14, 124, 65, 67
                </div>

                <h5>Initial Head Position</h5>

                <div className="alert alert-secondary">53</div>

                <h5>Direction</h5>

                <div className="alert alert-secondary">
                  Moving Towards Higher Tracks
                </div>

                <h5>Head Movement</h5>

                <div className="alert alert-primary">
                  53 → 65 → 67 → 98 → 122 → 124 → 183 → End → 37 → 14
                </div>

                <p className="fs-5 text-secondary">
                  The disk head services requests while moving in one direction,
                  then reverses.
                </p>
              </div>
            </div>

            {/* Advantages & Disadvantages */}
            <div className="row g-4 mb-5">
              {/* Advantages */}
              <div className="col-md-6">
                <div className="bg-success bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-success">✅ Advantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>Better performance than FCFS</li>
                    <li>Reduced seek time</li>
                    <li>Fair servicing of requests</li>
                    <li>Efficient disk utilization</li>
                  </ul>
                </div>
              </div>

              {/* Disadvantages */}
              <div className="col-md-6">
                <div className="bg-danger bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-danger">❌ Disadvantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>Long waiting time for some requests</li>
                    <li>Head travels to disk end unnecessarily</li>
                    <li>More complex than FCFS</li>
                    <li>Direction reversal overhead</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Time Complexity */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📊 Time Complexity</h3>

              <div className="table-responsive mt-4">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>Operation</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Scheduling</td>
                      <td>O(n log n)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-4">
                <b>Where:</b>
                <br />n = Number of disk requests
              </div>
            </div>

            {/* Why Used */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📖 Why is SCAN Used?</h3>

              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚡ Reduced Seek Time</h5>

                    <p className="text-secondary">
                      Minimizes unnecessary head movement.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💽 Better Disk Performance</h5>

                    <p className="text-secondary">
                      Efficient servicing of disk requests.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📚 Operating Systems</h5>

                    <p className="text-secondary">
                      Widely used in modern disk scheduling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formula */}
            <div>
              <h3 className="fw-bold text-primary">
                🚀 Formula for Total Head Movement
              </h3>

              <div className="bg-light rounded-4 p-4 mt-4">
                <div className="alert alert-primary fs-5">
                  Total Head Movement = Distance travelled while scanning in
                  both directions
                </div>

                <p className="fs-5 text-secondary">
                  This calculates the total movement of the disk head during the
                  scan process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SCANDiskInfo;
