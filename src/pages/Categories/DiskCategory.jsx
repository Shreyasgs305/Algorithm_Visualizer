import React from "react";
import { Link } from "react-router-dom";

function DiskCategory() {
  return (
    <>
      <div className="container osCat my-5 pb-5 border rounded-5">
        <p className="OsCont">Disk Scheduling Algorithms</p>
        <hr />
        <div className="row Categories">
          <div className="col-6 text-center mt-4">
            <Link to="/Categories/Diskfcfs">
              <button
                className="btn btn-primary p-3 rounded-5 fs-5 border"
                style={{ width: "300px" }}
                type="button"
              >
                FCFS
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
            <br />
            <Link to="/Categories/Diskscan">
              <button
                className="btn btn-primary p-3 rounded-5 mt-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                SCAN
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
          </div>
          <div className="col-6 text-center mt-4">
            <Link to="/Categories/Disksstf">
              <button
                className="btn btn-primary p-3 rounded-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                SSTF
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
            <br />
            <Link to="/Categories/DiskCscan">
              <button
                className="btn btn-primary p-3 rounded-5 mt-5 fs-5"
                style={{ width: "300px" }}
                type="button"
              >
                C-SCAN
                <i className="fa-solid fa-arrow-right-long "></i>
              </button>
            </Link>
          </div>
          <div className="row  mt-4">
            <div className="col text-center mt-2">
              <Link to="/Categories/Disklook">
                <button
                  className="btn btn-primary p-3 rounded-5 fs-5"
                  style={{ width: "300px" }}
                  type="button"
                >
                  LOOK
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

export default DiskCategory;
