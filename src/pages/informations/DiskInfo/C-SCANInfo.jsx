import React from "react";

function CSCANDiskInfo() {
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
            <h2 className="fw-bold mb-0">
              💽 C-SCAN Disk Scheduling Algorithm
            </h2>
          </div>

          <div className="card-body p-5">
            {/* Definition */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📘 Definition</h3>

              <p className="fs-5 text-secondary mt-3">
                C-SCAN (Circular SCAN) Disk Scheduling Algorithm is a disk
                scheduling technique where the disk head moves in only one
                direction and services all requests.
              </p>

              <p className="fs-5 text-secondary">
                After reaching the end of the disk, the head immediately returns
                to the beginning without servicing requests during the return
                movement.
              </p>

              <div className="alert alert-primary mt-4">
                C-SCAN treats the disk as a circular queue.
              </div>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">⚙️ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <ul className="fs-5">
                  <li>Disk head moves in one direction only</li>
                  <li>All requests in that direction are serviced</li>
                  <li>After reaching disk end, head jumps to start</li>
                  <li>Scanning continues again in same direction</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Requests are serviced in a circular manner.
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
                  53 → 65 → 67 → 98 → 122 → 124 → 183 → End → Start → 14 → 37
                </div>

                <p className="fs-5 text-secondary">
                  The head always moves in one direction and jumps back to the
                  start after reaching the end.
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
                    <li>Provides uniform waiting time</li>
                    <li>Better fairness than SCAN</li>
                    <li>Efficient disk utilization</li>
                    <li>Reduced response variation</li>
                  </ul>
                </div>
              </div>

              {/* Disadvantages */}
              <div className="col-md-6">
                <div className="bg-danger bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-danger">❌ Disadvantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>Extra movement during jump</li>
                    <li>More complex than FCFS</li>
                    <li>Higher overhead</li>
                    <li>Some requests may still wait longer</li>
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
              <h3 className="fw-bold text-primary">📖 Why is C-SCAN Used?</h3>

              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚡ Uniform Waiting Time</h5>

                    <p className="text-secondary">
                      Provides fair servicing to all requests.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💽 Better Disk Efficiency</h5>

                    <p className="text-secondary">
                      Reduces starvation problem.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📚 Modern Operating Systems</h5>

                    <p className="text-secondary">
                      Used for efficient disk scheduling.
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
                  Total Head Movement = Movement in one direction + Jump back to
                  beginning
                </div>

                <p className="fs-5 text-secondary">
                  This calculates total disk head movement during circular
                  scanning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CSCANDiskInfo;
