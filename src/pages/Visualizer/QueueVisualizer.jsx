import { useState } from "react";
import QueueAnimate from "../../visualizers/QueueAnimate";
import QueueInfo from "../informations/DataStrucInfo/QueueInfo";

function QueueVisualizer() {
  const [value, setValue] = useState("");
  const [queue, setQueue] = useState([]);
  const [history, setHistory] = useState([]);

  const handleEnqueue = () => {
    if (value === "") return;

    const newQueue = [...queue, value];
    setQueue(newQueue);
    setHistory([...history, `Enqueued ${value}`]);
    setValue("");
  };

  const handleDequeue = () => {
    if (queue.length === 0) return;

    const newQueue = [...queue];
    const removed = newQueue.shift();

    setQueue(newQueue);
    setHistory([...history, `Dequeued ${removed}`]);
  };

  const handlePeek = () => {
    if (queue.length === 0) return;

    setHistory([...history, `Front Element is ${queue[0]}`]);
  };

  const handleClear = () => {
    setQueue([]);
    setHistory([...history, "Queue Cleared"]);
  };

  return (
    <>
      <h2 className="text-center mt-5">Queue Data Structure</h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading">Queue Operations</p>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Input</h3>

            {/* Value Input */}
            <div className="mb-3">
              <label className="form-label">Enter Value</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>

            {/* Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button
                className="btn btn-success rounded-5 px-4"
                onClick={handleEnqueue}
              >
                ENQUEUE
              </button>

              <button
                className="btn btn-danger rounded-5 px-4"
                onClick={handleDequeue}
              >
                DEQUEUE
              </button>

              <button
                className="btn btn-warning rounded-5 px-4"
                onClick={handlePeek}
              >
                PEEK
              </button>

              <button
                className="btn btn-secondary rounded-5 px-4"
                onClick={handleClear}
              >
                CLEAR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OUTPUT SECTION */}
      <div className="container">
        <hr />

        {/* Animation */}
        <h3>Queue Visualization</h3>
        <div className="container text-center">
          <QueueAnimate queue={queue} />
        </div>

        {/* Operation History */}
        <div className="d-flex justify-content-center mt-5">
          <table
            style={{
              textAlign: "center",
              width: "75%",
              marginTop: "30px",
              borderCollapse: "collapse",
            }}
            border="1"
          >
            <thead style={{ background: "#009FFF", color: "white" }}>
              <tr>
                <th>Step</th>
                <th>Operation</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Queue Info */}
        <div className="container text-end mt-4 bg-light p-3">
          <h5>
            Queue Size: <b>{queue.length}</b>
          </h5>
          <h5>
            Front: <b>{queue[0] || "Empty"}</b>
          </h5>
          <h5>
            Rear: <b>{queue[queue.length - 1] || "Empty"}</b>
          </h5>
        </div>
      </div>
      <QueueInfo />
    </>
  );
}

export default QueueVisualizer;
