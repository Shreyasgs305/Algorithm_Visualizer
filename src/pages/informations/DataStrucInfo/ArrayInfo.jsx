import React from "react";

function ArrayInfo() {
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
            <h2 className="fw-bold mb-0">📊 Array Data Structure</h2>
          </div>

          <div className="card-body p-5">
            {/* Explanation */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Explanation</h3>

              <p className="fs-5 text-secondary mt-3">
                Array is a linear data structure used to store multiple elements
                of the same data type in contiguous memory locations.
              </p>

              <p className="fs-5 text-secondary">
                Each element in an array is accessed using an index value
                starting from 0.
              </p>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <p className="fs-5 text-secondary">
                  Arrays store elements sequentially in memory.
                </p>

                <ul className="fs-5 mt-3">
                  <li>Each element has a fixed index</li>
                  <li>Elements can be accessed directly</li>
                  <li>Memory is allocated continuously</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Example:
                  <br />
                  Array = [10, 20, 30, 40]
                  <br />
                  Index of 30 = 2
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
                      <td>Insertion</td>
                      <td>Add element into array</td>
                    </tr>

                    <tr>
                      <td>Deletion</td>
                      <td>Remove element from array</td>
                    </tr>

                    <tr>
                      <td>Traversal</td>
                      <td>Access all elements</td>
                    </tr>

                    <tr>
                      <td>Searching</td>
                      <td>Find a specific element</td>
                    </tr>

                    <tr>
                      <td>Updating</td>
                      <td>Modify an element</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Used */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">4️⃣ Why is Array Used?</h3>

              <div className="row g-4 mt-2">
                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚡ Fast Access</h5>

                    <p className="text-secondary">
                      Elements can be accessed quickly using index.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📊 Data Storage</h5>

                    <p className="text-secondary">
                      Used to store large collections of data.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🧮 Mathematical Computation</h5>

                    <p className="text-secondary">
                      Useful in matrices and calculations.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🎮 Game Development</h5>

                    <p className="text-secondary">
                      Used to manage objects and game states.
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
                      <td>Access</td>
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Insertion</td>
                      <td>O(n)</td>
                    </tr>

                    <tr>
                      <td>Deletion</td>
                      <td>O(n)</td>
                    </tr>

                    <tr>
                      <td>Search</td>
                      <td>O(n)</td>
                    </tr>

                    <tr>
                      <td>Update</td>
                      <td>O(1)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-4">
                <b>Note:</b> Arrays provide very fast direct access using
                indexes, but insertion and deletion may require shifting
                elements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArrayInfo;
