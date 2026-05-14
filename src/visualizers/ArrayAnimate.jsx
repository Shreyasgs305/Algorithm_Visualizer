import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function ArrayAnimate({ array, insertedIndex, updatedIndex }) {
  useEffect(() => {
    if (insertedIndex !== null) {
      anime({
        targets: `#arr-${insertedIndex}`,
        scale: [0.5, 1.2, 1],
        opacity: [0, 1],
        backgroundColor: ["#28a745", "#0d6efd"],
        easing: "easeOutBack",
        duration: 600,
      });
    }
  }, [insertedIndex]);

  useEffect(() => {
    if (updatedIndex !== null) {
      anime({
        targets: `#arr-${updatedIndex}`,
        scale: [1, 1.2, 1],
        backgroundColor: ["#ffc107", "#0d6efd"],
        easing: "easeInOutQuad",
        duration: 600,
      });
    }
  }, [updatedIndex]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        minHeight: "120px",
        marginTop: "40px",
      }}
    >
      {array.length === 0 ? (
        <div className="text-muted">Array is Empty</div>
      ) : (
        array.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <div
              id={`arr-${index}`}
              style={{
                width: "70px",
                height: "70px",
                background: "#0d6efd",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>

            <div
              style={{ marginTop: "5px", fontSize: "13px", color: "#6c757d" }}
            >
              Index: {index}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ArrayAnimate;
