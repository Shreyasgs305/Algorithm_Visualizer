import React from "react";

function FCFSInfo() {
  return (
    <>
      <div className="container Info mb-5">
        <div className="card shadow-lg border-0 rounded-5">
          <div
            className="card-header text-white p-4"
            style={{
              background: "linear-gradient(to right, #009FFF, #005bea)",
            }}
          >
            <h2 className="fw-bold mb-0">📘 First Come First Serve (FCFS)</h2>
          </div>

          <div className="card-body p-5">
            {/* Definition */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Definition</h3>

              <p className="fs-5 text-secondary mt-3 fcfsDef">
                First Come First Serve (FCFS) is a CPU scheduling algorithm in
                which the process that arrives first in the ready queue gets
                executed first.
              </p>

              <p className="fs-5 text-secondary">
                It follows the FIFO (First In First Out) scheduling principle
                and is a non-preemptive scheduling algorithm.
              </p>
            </div>

            {/* Uses */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Where is FCFS Used?</h3>

              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🖨️ Printer Queue</h5>

                    <p className="text-secondary">
                      Print requests are processed in the order they arrive.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💾 Batch Systems</h5>

                    <p className="text-secondary">
                      Jobs execute sequentially in operating systems.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🏦 Queue Systems</h5>

                    <p className="text-secondary">
                      Works similar to bank or ticket counter queues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulas */}
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

            {/* Advantages & Disadvantages */}
            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className=" adv-card bg-success bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-success">4️⃣ Advantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>Simple and easy to implement</li>
                    <li>No starvation problem</li>
                    <li>Fair scheduling</li>
                    <li>Low CPU overhead</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className=" dis-card bg-danger bg-opacity-10 rounded-4 p-4 h-100">
                  <h3 className="text-danger">5️⃣ Disadvantages</h3>

                  <ul className="fs-5 mt-3">
                    <li>High waiting time</li>
                    <li>Convoy effect problem</li>
                    <li>Poor response time</li>
                    <li>Not suitable for interactive systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Time Complexity */}
            <div>
              <h3 className="fw-bold text-primary mb-4">6️⃣ Time Complexity</h3>

              <div className="table-responsive">
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
                <b>Note:</b> FCFS checks all processes once in arrival order,
                therefore the time complexity is linear.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FCFSInfo;
