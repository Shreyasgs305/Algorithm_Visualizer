import React from "react";

function About() {
  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1>
          About <span className="text-primary">AlgoVisualizer</span>
        </h1>
        <p className="text-muted mt-3">
          Bringing algorithms and data structures to life through interactive
          visualizations.
        </p>
      </div>

      {/* Section 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3>What is AlgoVisualizer?</h3>
          <p>
            AlgoVisualizer is an interactive platform designed to help students
            understand algorithms and data structures through real-time
            animation. Instead of just reading code, users can visualize how
            each step works behind the scenes.
          </p>
        </div>
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-light">
            <h5 className="text-primary">Core Categories</h5>
            <ul>
              <li>Sorting Algorithms</li>
              <li>Searching Algorithms</li>
              <li>Operating System Scheduling</li>
              <li>Data Structures</li>
              <li>Disk Scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <h3>Why We Built This</h3>
          <p>
            Many students struggle to understand how algorithms actually work
            internally. AlgoVisualizer focuses on clarity, interaction, and
            step-by-step execution so that learning becomes intuitive and
            engaging.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <div className="p-4 shadow rounded-4 bg-light">
            <h5 className="text-primary">Our Mission</h5>
            <p>
              To simplify complex computer science concepts and make them
              visually understandable for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="text-center mt-5">
        <h3>Technology Used</h3>
        <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
          <div className="tech-card">React</div>
          <div className="tech-card">Anime.js</div>
          <div className="tech-card">JavaScript</div>
          <div className="tech-card">Bootstrap</div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default About;
