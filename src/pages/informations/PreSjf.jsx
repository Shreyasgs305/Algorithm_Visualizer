import React from "react";

function PreemptiveSJFInfo() {
  return (
    <>
      <div className="container Info mb-5">
        <div className="card shadow-lg border-0 rounded-5">
          {/* Header */}
          <div
            className="card-header text-white p-4"
            style={{
              background: "linear-gradient(to right, #009FFF, #005bea)",
            }}
          >
            <h2 className="fw-bold mb-0">📘 Preemptive SJF (SRTF)</h2>
          </div>

          <div className="card-body p-5">
            {/* Definition */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Definition</h3>

              <p className="fs-5 text-secondary mt-3">
                Preemptive Shortest Job First (SJF), also called Shortest
                Remaining Time First (SRTF), is a CPU scheduling algorithm where
                the process with the shortest remaining burst time gets executed
                first.
              </p>

              <p className="fs-5 text-secondary">
                If a new process arrives with shorter remaining time than the
                currently running process, the CPU interrupts the current
                process and executes the shorter process.
              </p>
            </div>

            {/* Uses */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Where is it Used?</h3>

              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚡ Real-Time Systems</h5>

                    <p className="text-secondary">
                      Short tasks get immediate CPU access.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💻 CPU Scheduling</h5>

                    <p className="text-secondary">
                      Reduces average waiting time and improves performance.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📂 Interactive Systems</h5>

                    <p className="text-secondary">
                      Improves response time for small tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formula */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary mb-4">
                3️⃣ Important Formulas
              </h3>

              <div className="bg-light rounded-4 p-4">
                <div className="mb-4">
                  <h5>Turnaround Time</h5>

                  <p className="fs-5">
                    Turnaround Time = Completion Time - Arrival Time
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Waiting Time</h5>

                  <p className="fs-5">
                    Waiting Time = Turnaround Time - Burst Time
                  </p>
                </div>

                <div>
                  <h5>Average Waiting Time</h5>

                  <p className="fs-5">
                    Average WT = Sum of Waiting Time / Number of Processes
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Advantages */}
              <div className="col-12 col-md-6 mb-4">
                <div className="bg-success bg-opacity-10 rounded-4 p-4 h-100 shadow-sm">
                  <h3 className="text-success fw-bold">4️⃣ Advantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>Minimum average waiting time</li>
                    <li>Better response time</li>
                    <li>Efficient CPU utilization</li>
                    <li>Improves throughput</li>
                  </ul>
                </div>
              </div>

              {/* Disadvantages */}
              <div className="col-12 col-md-6 mb-4">
                <div className="bg-danger bg-opacity-10 rounded-4 p-4 h-100 shadow-sm">
                  <h3 className="text-danger fw-bold">5️⃣ Disadvantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>High context switching</li>
                    <li>Starvation may occur</li>
                    <li>Difficult to predict burst time</li>
                    <li>Complex implementation</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Advantages */}
            {/* Time Complexity */}
            <div>
              <h3 className="fw-bold text-primary mb-4">6️⃣ Time Complexity</h3>

              <div className="table-responsive">
                <table className="table table-bordered">
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
                <b>Note:</b> Processes are continuously checked and sorted based
                on remaining burst time, therefore complexity is generally O(n
                log n).
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreemptiveSJFInfo;
