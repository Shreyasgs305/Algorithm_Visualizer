import React from "react";

function FCFSDiskInfo() {
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
            <h2 className="fw-bold mb-0">💽 FCFS Disk Scheduling Algorithm</h2>
          </div>

          <div className="card-body p-5">
            {/* Definition */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">📘 Definition</h3>

              <p className="fs-5 text-secondary mt-3">
                FCFS (First Come First Serve) Disk Scheduling is a disk
                scheduling algorithm in which disk requests are processed in the
                order they arrive in the request queue.
              </p>

              <p className="fs-5 text-secondary">
                The request that comes first gets served first without any
                priority or optimization.
              </p>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">⚙️ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <ul className="fs-5">
                  <li>Disk requests enter the queue</li>
                  <li>The disk head moves to the first request</li>
                  <li>
                    After completing it, the head moves to the next request
                  </li>
                  <li>This continues until all requests are completed</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  FCFS follows the FIFO (First In First Out) principle.
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
                  53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67
                </div>

                <p className="fs-5 text-secondary">
                  The disk head moves exactly in the arrival order.
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
                    <li>Simple and easy to implement</li>
                    <li>Fair scheduling</li>
                    <li>No starvation</li>
                    <li>Requests are handled in arrival order</li>
                  </ul>
                </div>
              </div>

              {/* Disadvantages */}
              <div className="col-md-6">
                <div className="bg-danger bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-danger">❌ Disadvantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>High seek time</li>
                    <li>Large head movement</li>
                    <li>Poor performance compared to optimized algorithms</li>
                    <li>May increase waiting time</li>
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
                      <td>O(n)</td>
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
              <h3 className="fw-bold text-primary">
                📖 Why is FCFS Disk Scheduling Used?
              </h3>

              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💻 Simple Systems</h5>

                    <p className="text-secondary">
                      Easy scheduling for basic systems.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📚 Learning Purpose</h5>

                    <p className="text-secondary">
                      Commonly used for educational understanding.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚙️ Basic OS Design</h5>

                    <p className="text-secondary">
                      Used in simple operating system implementations.
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
                  Total Head Movement = ∑ | Current Position - Next Request |
                </div>

                <p className="fs-5 text-secondary">
                  This formula calculates the total movement of the disk head.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FCFSDiskInfo;
