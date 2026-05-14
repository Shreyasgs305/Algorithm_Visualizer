import React from "react";

function StackInfo() {
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
            <h2 className="fw-bold mb-0">📚 Stack Data Structure</h2>
          </div>

          <div className="card-body p-5">
            {/* Explanation */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Explanation</h3>

              <p className="fs-5 text-secondary mt-3">
                Stack is a linear data structure that follows the LIFO (Last In
                First Out) principle.
              </p>

              <p className="fs-5 text-secondary">
                The element inserted last will be removed first. Elements are
                added and removed only from the top of the stack.
              </p>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <p className="fs-5 text-secondary">
                  Stack works on the LIFO principle:
                </p>

                <ul className="fs-5 mt-3">
                  <li>New elements are added at the top</li>
                  <li>Elements are removed from the top</li>
                  <li>Last inserted element comes out first</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Example:
                  <br />
                  Push → 10, 20, 30
                  <br />
                  Pop → 30 removed first
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
                      <td>Push</td>
                      <td>Add element to top of stack</td>
                    </tr>

                    <tr>
                      <td>Pop</td>
                      <td>Remove top element</td>
                    </tr>

                    <tr>
                      <td>Peek / Top</td>
                      <td>View top element</td>
                    </tr>

                    <tr>
                      <td>isEmpty</td>
                      <td>Check if stack is empty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Used */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">4️⃣ Why is Stack Used?</h3>

              <div className="row g-4 mt-2">
                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>↩️ Undo/Redo</h5>

                    <p className="text-secondary">
                      Used in text editors and applications.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🌐 Browser History</h5>

                    <p className="text-secondary">
                      Previous pages are stored in stack.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📞 Function Calls</h5>

                    <p className="text-secondary">
                      Function execution uses call stack.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🧮 Expression Evaluation</h5>

                    <p className="text-secondary">
                      Used in compilers and calculators.
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
                      <td>Push</td>
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Pop</td>
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
                <b>Note:</b> Most stack operations are performed at the top of
                the stack, therefore insertion and deletion are very fast.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StackInfo;
