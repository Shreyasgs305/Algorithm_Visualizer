import { useState } from "react";
import TreeAnimate from "../../visualizers/TreeAnimate";
import TreeInfo from "../informations/DataStrucInfo/TreeInfo";

function TreeVisualizer() {
  const [value, setValue] = useState("");
  const [tree, setTree] = useState([]);
  const [history, setHistory] = useState([]);
  const [insertedIndex, setInsertedIndex] = useState(null);

  // LEVEL ORDER INSERT
  const handleInsert = () => {
    const val = value.trim();
    if (!val) return;

    setTree((prev) => {
      const newTree = [...prev, val];
      setInsertedIndex(newTree.length - 1);
      return newTree;
    });

    setHistory((prev) => [...prev, `Inserted ${val}`]);
    setValue("");
    setTimeout(() => {
      document.getElementById("output-section").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleClear = () => {
    setTree([]);
    setHistory((prev) => [...prev, "Tree Cleared"]);
    setInsertedIndex(null);
  };

  return (
    <>
      <h2 className="text-center mt-5" id="output-section">
        Binary Tree Data Structure
      </h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading">Tree Operations</p>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Input</h3>

            <div className="mb-3">
              <label className="form-label">Enter Value</label>
              <input
                type="number"
                className="form-control"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button
                className="btn btn-success rounded-5 px-4"
                onClick={handleInsert}
              >
                INSERT
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

      {/* OUTPUT */}
      <div className="container">
        <hr />

        <h3>Tree Visualization</h3>
        <div className="container text-center">
          <TreeAnimate tree={tree} insertedIndex={insertedIndex} />
        </div>

        <div className="container text-end mt-4 bg-light p-3">
          <h5>
            Total Nodes: <b>{tree.length}</b>
          </h5>
        </div>
      </div>
      <TreeInfo />
    </>
  );
}

export default TreeVisualizer;
