import { useState } from "react";
import ArrayAnimate from "../../visualizers/ArrayAnimate";
import ArrayInfo from "../informations/DataStrucInfo/ArrayInfo";

function ArrayVisualizer() {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [array, setArray] = useState([]);
  const [history, setHistory] = useState([]);
  const [insertedIndex, setInsertedIndex] = useState(null);
  const [updatedIndex, setUpdatedIndex] = useState(null);

  // INSERT END
  const handleInsertEnd = () => {
    const val = value.trim();
    if (!val) return;

    setArray((prev) => {
      const newArr = [...prev, val];
      setInsertedIndex(newArr.length - 1);
      setUpdatedIndex(null);
      return newArr;
    });

    setHistory((prev) => [...prev, `Inserted ${val} at End`]);
    setValue("");
  };

  // INSERT AT INDEX
  const handleInsertAt = () => {
    const val = value.trim();
    const idx = Number(index);

    if (!val || isNaN(idx) || idx < 0 || idx > array.length) return;

    setArray((prev) => {
      const newArr = [...prev];
      newArr.splice(idx, 0, val);
      setInsertedIndex(idx);
      setUpdatedIndex(null);
      return newArr;
    });

    setHistory((prev) => [...prev, `Inserted ${val} at index ${idx}`]);
    setValue("");
    setIndex("");
  };

  // DELETE AT INDEX
  const handleDeleteAt = () => {
    const idx = Number(index);
    if (isNaN(idx) || idx < 0 || idx >= array.length) return;

    setArray((prev) => {
      const newArr = [...prev];
      const removed = newArr.splice(idx, 1);
      return newArr;
    });

    setHistory((prev) => [...prev, `Deleted element at index ${idx}`]);
    setIndex("");
    setInsertedIndex(null);
    setUpdatedIndex(null);
  };

  // UPDATE VALUE
  const handleUpdate = () => {
    const val = value.trim();
    const idx = Number(index);

    if (!val || isNaN(idx) || idx < 0 || idx >= array.length) return;

    setArray((prev) => {
      const newArr = [...prev];
      newArr[idx] = val;
      setUpdatedIndex(idx);
      setInsertedIndex(null);
      return newArr;
    });

    setHistory((prev) => [...prev, `Updated index ${idx} to ${val}`]);
    setValue("");
    setIndex("");
  };

  const handleClear = () => {
    setArray([]);
    setHistory((prev) => [...prev, "Array Cleared"]);
    setInsertedIndex(null);
    setUpdatedIndex(null);
  };

  return (
    <>
      <h2 className="text-center mt-5">Array Data Structure</h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading">Array Operations</p>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Input</h3>

            <div className="mb-3">
              <label className="form-label">Value</label>
              <input
                type="text"
                className="form-control"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Index</label>
              <input
                type="number"
                className="form-control"
                value={index}
                onChange={(e) => setIndex(e.target.value)}
                required
              />
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button
                className="btn btn-success rounded-5 px-4"
                onClick={handleInsertEnd}
              >
                INSERT END
              </button>

              <button
                className="btn btn-primary rounded-5 px-4"
                onClick={handleInsertAt}
              >
                INSERT AT
              </button>

              <button
                className="btn btn-danger rounded-5 px-4"
                onClick={handleDeleteAt}
              >
                DELETE AT
              </button>

              <button
                className="btn btn-warning rounded-5 px-4"
                onClick={handleUpdate}
              >
                UPDATE
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
        <h3>Array Visualization</h3>
        <div className="container text-center">
          <ArrayAnimate
            array={array}
            insertedIndex={insertedIndex}
            updatedIndex={updatedIndex}
          />
        </div>

        <div className="container text-end mt-4 bg-light p-3">
          <h5>
            Array Length: <b>{array.length}</b>
          </h5>
        </div>
      </div>
      <ArrayInfo />
    </>
  );
}

export default ArrayVisualizer;
