import React from "react";

function TreeInfo() {
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
            <h2 className="fw-bold mb-0">🌳 Tree Data Structure</h2>
          </div>

          <div className="card-body p-5">
            {/* Explanation */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Explanation</h3>

              <p className="fs-5 text-secondary mt-3">
                Tree is a non-linear hierarchical data structure that consists
                of nodes connected by edges.
              </p>

              <p className="fs-5 text-secondary">
                The topmost node is called the Root Node, and each node may
                contain child nodes.
              </p>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <p className="fs-5 text-secondary">
                  Trees organize data in hierarchical form.
                </p>

                <ul className="fs-5 mt-3">
                  <li>Data starts from the root node</li>
                  <li>Each node can have child nodes</li>
                  <li>Nodes are connected using edges</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Example:
                  <br />
                  Root → Parent → Child
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
                      <td>Add node into tree</td>
                    </tr>

                    <tr>
                      <td>Deletion</td>
                      <td>Remove node from tree</td>
                    </tr>

                    <tr>
                      <td>Traversal</td>
                      <td>Visit nodes systematically</td>
                    </tr>

                    <tr>
                      <td>Searching</td>
                      <td>Find a node in tree</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Used */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">4️⃣ Why is Tree Used?</h3>

              <div className="row g-4 mt-2">
                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📂 File Systems</h5>

                    <p className="text-secondary">
                      Folders and directories use tree structure.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🌐 DOM Structure</h5>

                    <p className="text-secondary">
                      HTML elements are organized as trees.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🗄️ Databases</h5>

                    <p className="text-secondary">
                      Trees are used for indexing and searching.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🤖 AI & Decision Making</h5>

                    <p className="text-secondary">
                      Decision trees are used in AI systems.
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
                      <td>Insertion</td>
                      <td>O(log n)</td>
                    </tr>

                    <tr>
                      <td>Deletion</td>
                      <td>O(log n)</td>
                    </tr>

                    <tr>
                      <td>Searching</td>
                      <td>O(log n)</td>
                    </tr>

                    <tr>
                      <td>Traversal</td>
                      <td>O(n)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-4">
                <b>Note:</b> Balanced trees provide efficient searching,
                insertion, and deletion operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TreeInfo;
