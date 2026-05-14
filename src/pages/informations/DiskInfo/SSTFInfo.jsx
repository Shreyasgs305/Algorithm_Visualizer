import React from "react";

function SSTFDiskInfo() {
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
            <h2 className="fw-bold mb-0">💽 SSTF Disk Scheduling Algorithm</h2>
          </div>

          <div className="card-body p-5">
            {/* Definition */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📘 Definition</h3>

              <p className="fs-5 text-secondary mt-3">
                SSTF (Shortest Seek Time First) Disk Scheduling is a disk
                scheduling algorithm in which the disk request closest to the
                current head position is serviced first.
              </p>

              <p className="fs-5 text-secondary">
                It reduces total seek time by selecting the nearest request from
                the current head position.
              </p>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">⚙️ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <ul className="fs-5">
                  <li>Disk requests enter the queue</li>
                  <li>Disk head checks nearest request</li>
                  <li>Closest request gets executed first</li>
                  <li>Process repeats until all requests are completed</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  SSTF selects the request with minimum seek time from the
                  current head position.
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

                <h5>Head Movement</h5>

                <div className="alert alert-primary">
                  53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183
                </div>

                <p className="fs-5 text-secondary">
                  The nearest request is selected at each step.
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
                    <li>Reduces seek time</li>
                    <li>Better performance than FCFS</li>
                    <li>Less head movement</li>
                    <li>Improves disk efficiency</li>
                  </ul>
                </div>
              </div>

              {/* Disadvantages */}
              <div className="col-md-6">
                <div className="bg-danger bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-danger">❌ Disadvantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>Starvation may occur</li>
                    <li>Far requests may wait too long</li>
                    <li>More complex than FCFS</li>
                    <li>Not completely fair</li>
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
                      <td>O(n²)</td>
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
              <h3 className="fw-bold text-primary">📖 Why is SSTF Used?</h3>

              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚡ Faster Scheduling</h5>

                    <p className="text-secondary">
                      Reduces total head movement.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💽 Better Disk Performance</h5>

                    <p className="text-secondary">Improves seek efficiency.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📚 Operating Systems</h5>

                    <p className="text-secondary">
                      Used to optimize disk access operations.
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
                  Total Head Movement = ∑ | Current Position - Closest Request |
                </div>

                <p className="fs-5 text-secondary">
                  This calculates the total movement of the disk head using
                  nearest requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SSTFDiskInfo;
