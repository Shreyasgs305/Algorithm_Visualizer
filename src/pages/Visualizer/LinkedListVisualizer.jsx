import { useState } from "react";
import LinkedListAnimate from "../../visualizers/LinkedListAnimate";
import LinkedListInfo from "../informations/DataStrucInfo/LinkedlistInfo";

function LinkedListVisualizer() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [history, setHistory] = useState([]);

  const handleInsertEnd = () => {
    if (value === "") return;

    const newList = [...list, value];
    setList(newList);
    setHistory([...history, `Inserted ${value} at End`]);
    setValue("");
  };

  const handleInsertStart = () => {
    if (value === "") return;

    const newList = [value, ...list];
    setList(newList);
    setHistory([...history, `Inserted ${value} at Beginning`]);
    setValue("");
  };

  const handleDelete = () => {
    if (value === "") return;

    setList((prevList) => {
      const index = prevList.indexOf(value);

      if (index === -1) {
        setHistory((prevHistory) => [
          ...prevHistory,
          `Value ${value} not found`,
        ]);
        return prevList;
      }

      const newList = [...prevList];
      newList.splice(index, 1);

      setHistory((prevHistory) => [...prevHistory, `Deleted ${value}`]);

      return newList;
    });

    setValue("");
  };

  const handleClear = () => {
    setList([]);
    setHistory([...history, "Linked List Cleared"]);
  };

  return (
    <>
      <h2 className="text-center mt-5">Linked List Data Structure</h2>

      <div className="container inputCategory my-5 pb-5 border rounded-5">
        <p className="fcfsHeading">Linked List Operations</p>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Input</h3>

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

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button
                className="btn btn-success rounded-5 px-4"
                onClick={handleInsertEnd}
              >
                INSERT END
              </button>

              <button
                className="btn btn-primary rounded-5 px-4"
                onClick={handleInsertStart}
              >
                INSERT BEGIN
              </button>

              <button
                className="btn btn-danger rounded-5 px-4"
                onClick={handleDelete}
              >
                DELETE
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
        <h3>Linked List Visualization</h3>
        <div className="container text-center">
          <LinkedListAnimate list={list} />
        </div>

        {/* History Table */}
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

        {/* Info Section */}
        <div className="container text-end mt-4 bg-light p-3">
          <h5>
            Total Nodes: <b>{list.length}</b>
          </h5>
          <h5>
            Head: <b>{list[0] || "Null"}</b>
          </h5>
        </div>
      </div>
      <LinkedListInfo />
    </>
  );
}

export default LinkedListVisualizer;
