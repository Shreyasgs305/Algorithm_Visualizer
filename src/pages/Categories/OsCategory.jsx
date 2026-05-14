import React from "react";
import { Link } from "react-router-dom";

function OsCategory() {
  return (
    <>
      <h2 className="text-center mt-5">Algorithm Categories</h2>
      <div className="container osCat my-5 pb-5 border rounded-5">
        <p className="OsCont">Operating System Algorithms</p>
        <hr />
        <div className="row Categories">
          <div className="col-6 text-center mt-4">
            <Link to="/Categories/FCFSAlgorithm">
              <button
                className="btn btn-primary p-3 rounded-5 fs-5 border"
                style={{ width: "300px" }}
                type="button"
                to="/Categories/FCFSAlgorithm"
              >
                FCFS
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>

            <br />
            <Link to="/Categories/PRIORITYAlgorithm">
              <button
                className="Cate btn btn-primary p-3 rounded-5 mt-5 fs-5 Cate"
                style={{ width: "300px" }}
                type="button"
              >
                Priority
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
          </div>
          <div className="col-6 text-center mt-4">
            <Link to="/Categories/SJFAlgorithm">
              <button
                className="btn btn-primary p-3 rounded-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                SJF
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
            <br />
            <Link to="/Categories/RoundRobinAlgorithm">
              <button
                className="Cate btn btn-primary p-3 rounded-5 mt-5 fs-5 "
                style={{ width: "300px" }}
                type="button"
              >
                Round Robin
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OsCategory;
