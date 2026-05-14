import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="hero text-center mb-5">
        <h1>
          WelCome to{" "}
          <span className="fw-semibold" style={{ color: "#009FFF" }}>
            Algo
          </span>
          Visualizer
        </h1>

        <p
          className="herotext mx-auto p-2 text-center mb-5"
          style={{ width: "980px" }}
        >
          AlgoVisualizer brings algorithms to life through interactive
          animations and real-time execution. Explore sorting, searching,
          operating system, data structure, and disk scheduling algorithms step
          by step. Understand not just the result, but the logic behind every
          move.
        </p>
        <Link to="/Categories">
          <button
            className="btn btn-primary p-3 rounded-5 "
            style={{ width: "300px" }}
            type="button"
          >
            Explore Algorithms
          </button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
