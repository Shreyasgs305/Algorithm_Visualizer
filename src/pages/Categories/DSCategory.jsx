import React from "react";
import { Link } from "react-router-dom";
function DSCategory() {
  return (
    <>
      <div className="container osCat my-5 pb-5 border rounded-5">
        <p className="OsCont">Data Structure Algorithms</p>
        <hr />
        <div className="row Categories">
          <div className="col-6 text-center mt-4">
            <Link to="/Categories/Stack">
              <button
                className="btn btn-primary p-3 rounded-5 fs-5 border"
                style={{ width: "300px" }}
                type="button"
              >
                Stack
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
            <br />
            <Link to="/Categories/LinkedList">
              <button
                className="btn btn-primary p-3 rounded-5 mt-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                Linked List
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
          </div>
          <div className="col-6 text-center mt-4">
            <Link to="/Categories/Queue">
              <button
                className="btn btn-primary p-3 rounded-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                Queue
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
            <br />
            <Link to="/Categories/Array">
              <button
                className="btn btn-primary p-3 rounded-5 mt-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                Array
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
          </div>
          <div className="row  mt-4">
            <div className="col text-center mt-2">
              <Link to="/Categories/Tree">
                <button
                  className="btn btn-primary p-3 rounded-5 fs-5"
                  style={{ width: "300px" }}
                  type="button"
                >
                  Tree
                  <i className="fa-solid fa-arrow-right-long "></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DSCategory;
