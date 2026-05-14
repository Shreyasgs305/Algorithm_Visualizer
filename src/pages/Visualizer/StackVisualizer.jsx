import { useState } from "react";
import DSAnimate from "../../visualizers/DSAnimate";
import StackInfo from "../informations/DataStrucInfo/stackInfo";

function StackVisualizer() {
  const [value, setValue] = useState("");
  const [stack, setStack] = useState([]);
  const [history, setHistory] = useState([]);

  const handlePush = () => {
    if (value === "") return;

    const newStack = [...stack, value];
    setStack(newStack);
    setHistory([...history, `Pushed ${value}`]);
    setValue("");
    setTimeout(() => {
      document.getElementById("output-section").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handlePop = () => {
    if (stack.length === 0) return;

    const newStack = [...stack];
    const popped = newStack.pop();

    setStack(newStack);
    setHistory([...history, `Popped ${popped}`]);
  };

  return (
    <>
      <h2 className="text-center mt-5">Stack Data Structure</h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading" id="output-section">
          Stack Operations
        </p>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Input</h3>

            {/* Value Input */}
            <div className="mb-3">
              <label className="form-label">Enter Value</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button
                className="btn btn-success rounded-5 px-4"
                onClick={handlePush}
              >
                PUSH
              </button>

              <button
                className="btn btn-danger rounded-5 px-4"
                onClick={handlePop}
              >
                POP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OUTPUT SECTION */}
      <div className="container">
        <hr />

        {/* Animation */}
        <h3>Stack Visualization</h3>
        <div className="container text-center">
          <DSAnimate stack={stack} />
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

        {/* Stack Info */}
        <div className="container text-end mt-4 bg-light p-3">
          <h5>
            Current Stack Size: <b>{stack.length}</b>
          </h5>
          <h5>
            Top Element: <b>{stack[stack.length - 1] || "Empty"}</b>
          </h5>
        </div>
      </div>
      <StackInfo />
    </>
  );
}

export default StackVisualizer;
