import React from "react";

function QueueInfo() {
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
            <h2 className="fw-bold mb-0">🚶 Queue Data Structure</h2>
          </div>

          <div className="card-body p-5">
            {/* Explanation */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Explanation</h3>

              <p className="fs-5 text-secondary mt-3">
                Queue is a linear data structure that follows the FIFO (First In
                First Out) principle.
              </p>

              <p className="fs-5 text-secondary">
                The element inserted first will be removed first. Elements are
                inserted from the rear and removed from the front.
              </p>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <p className="fs-5 text-secondary">
                  Queue works on the FIFO principle:
                </p>

                <ul className="fs-5 mt-3">
                  <li>Elements are added from the rear</li>
                  <li>Elements are removed from the front</li>
                  <li>First inserted element comes out first</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Example:
                  <br />
                  Enqueue → 10, 20, 30
                  <br />
                  Dequeue → 10 removed first
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">3️⃣ Operations</h3>

              <div className="table-responsive mt-4">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>Operation</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Enqueue</td>
                      <td>Add element to rear</td>
                    </tr>

                    <tr>
                      <td>Dequeue</td>
                      <td>Remove element from front</td>
                    </tr>

                    <tr>
                      <td>Front / Peek</td>
                      <td>View front element</td>
                    </tr>

                    <tr>
                      <td>isEmpty</td>
                      <td>Check if queue is empty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Used */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">4️⃣ Why is Queue Used?</h3>

              <div className="row g-4 mt-2">
                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🖨️ Printer Queue</h5>

                    <p className="text-secondary">
                      Print jobs are processed in order.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💻 CPU Scheduling</h5>

                    <p className="text-secondary">
                      Used in process scheduling algorithms.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🎫 Ticket Booking</h5>

                    <p className="text-secondary">
                      Customers are served in order.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🌐 BFS Traversal</h5>

                    <p className="text-secondary">
                      Queue is used in graph traversal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Complexity */}
            <div>
              <h3 className="fw-bold text-primary mb-4">5️⃣ Time Complexity</h3>

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
                      <td>Enqueue</td>
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Dequeue</td>
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Peek</td>
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Search</td>
                      <td>O(n)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-4">
                <b>Note:</b> Queue operations are efficient because insertion
                and deletion occur at opposite ends of the queue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QueueInfo;
