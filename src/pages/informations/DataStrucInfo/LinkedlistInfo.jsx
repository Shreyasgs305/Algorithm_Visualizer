import React from "react";

function LinkedListInfo() {
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
            <h2 className="fw-bold mb-0">🔗 Linked List Data Structure</h2>
          </div>

          <div className="card-body p-5">
            {/* Explanation */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">1️⃣ Explanation</h3>

              <p className="fs-5 text-secondary mt-3">
                Linked List is a linear data structure where elements are stored
                in separate memory locations and connected using links.
              </p>

              <p className="fs-5 text-secondary">
                Each element in a linked list is called a node. Every node
                contains:
              </p>

              <ul className="fs-5">
                <li>Data</li>
                <li>Address of next node</li>
              </ul>
            </div>

            {/* Working Principle */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">2️⃣ Working Principle</h3>

              <div className="bg-light rounded-4 p-4 mt-3">
                <p className="fs-5 text-secondary">
                  Linked List works by connecting nodes using pointers or
                  references.
                </p>

                <ul className="fs-5 mt-3">
                  <li>Each node points to the next node</li>
                  <li>Traversal starts from head node</li>
                  <li>Last node points to NULL</li>
                </ul>

                <div className="alert alert-primary mt-4">
                  Example:
                  <br />
                  10 → 20 → 30 → NULL
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
                      <td>Add node to linked list</td>
                    </tr>

                    <tr>
                      <td>Deletion</td>
                      <td>Remove node from linked list</td>
                    </tr>

                    <tr>
                      <td>Traversal</td>
                      <td>Visit all nodes one by one</td>
                    </tr>

                    <tr>
                      <td>Search</td>
                      <td>Find a specific node</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Used */}
            <div className="mb-5">
              <h3 className="fw-bold text-primary">
                4️⃣ Why is Linked List Used?
              </h3>

              <div className="row g-4 mt-2">
                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>💾 Dynamic Memory</h5>

                    <p className="text-secondary">
                      Memory can grow dynamically.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>⚡ Fast Insertion</h5>

                    <p className="text-secondary">
                      Efficient insertion and deletion.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>🌐 Browser Navigation</h5>

                    <p className="text-secondary">
                      Used in forward/backward navigation.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="bg-light p-4 rounded-4 h-100 shadow-sm">
                    <h5>📂 Music Playlists</h5>

                    <p className="text-secondary">
                      Songs can be linked dynamically.
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
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Deletion</td>
                      <td>O(1)</td>
                    </tr>

                    <tr>
                      <td>Traversal</td>
                      <td>O(n)</td>
                    </tr>

                    <tr>
                      <td>Search</td>
                      <td>O(n)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-4">
                <b>Note:</b> Linked List allows dynamic memory allocation and
                efficient insertion or deletion operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LinkedListInfo;
