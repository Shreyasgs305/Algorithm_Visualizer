import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1>
          Contact <span className="text-primary">AlgoVisualizer</span>
        </h1>
        <p className="text-muted mt-3">
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-light">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <div className="d-grid mt-4">
                <button
                  type="submit"
                  className="btn btn-primary rounded-5 py-2"
                >
                  Send Message
                </button>
              </div>
            </form>

            {submitted && (
              <div className="alert alert-success mt-4">
                Message sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="card shadow-lg border-0 rounded-5 overflow-hidden">
          {/* Header */}
          <div
            className="text-center text-white p-5"
            style={{
              background: "linear-gradient(to right, #009FFF, #005bea)",
            }}
          >
            <h1 className="fw-bold">🚀 Connect With Me</h1>

            <p className="fs-5 mt-3 mb-0">
              Feel free to reach out for collaboration, feedback, or project
              discussions.
            </p>
          </div>

          {/* Body */}
          <div className="card-body p-3 p-md-5">
            <div className="row g-4">
              {/* GitHub */}
              <div className="col-12 col-md-6">
                <div className="bg-light rounded-5 p-4 p-md-5 text-center shadow-sm h-100">
                  <div style={{ fontSize: "60px" }}>💻</div>

                  <h3 className="fw-bold mt-3">GitHub</h3>

                  <p className="text-secondary fs-5 mt-3">
                    Explore my projects, repositories, and open-source
                    contributions.
                  </p>

                  <a
                    href="https://github.com/Shreyasgs305"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark rounded-pill px-4 mt-3"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="col-12 col-md-6">
                <div className="bg-light rounded-5 p-4 p-md-5 text-center shadow-sm h-100">
                  <div style={{ fontSize: "60px" }}>🔗</div>

                  <h3 className="fw-bold mt-3">LinkedIn</h3>

                  <p className="text-secondary fs-5 mt-3">
                    Connect professionally and stay updated with my work and
                    achievements.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/shreyas-g-s-b42a1a2a0/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary rounded-pill px-4 mt-3"
                  >
                    Visit LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-5 px-2">
              <h4 className="fw-bold">
                🌟 Thanks for Visiting My Algorithm Visualizer
              </h4>

              <p className="text-secondary fs-5 mt-3">
                Built with ❤️ using React and Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info */}
      <div className="text-center mt-5 text-muted">
        <p>Email: support@algovisualizer.com</p>
        <p>Location: India</p>
      </div>
    </div>
  );
}

export default Contact;
