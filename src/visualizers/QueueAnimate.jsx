import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

function QueueAnimate({ queue }) {
  const prevQueue = useRef([]);

  useEffect(() => {
    const oldQueue = prevQueue.current;

    // ENQUEUE
    if (queue.length > oldQueue.length) {
      const newIndex = queue.length - 1;

      anime({
        targets: `#queue-item-${newIndex}`,
        translateX: [70, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 450,
      });
    }

    // DEQUEUE
    if (queue.length < oldQueue.length) {
      anime({
        targets: `.queue-item`,
        translateX: [-50, 0],
        easing: "easeOutQuad",
        duration: 350,
      });
    }

    prevQueue.current = queue;
  }, [queue]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // ALWAYS CENTER
        alignItems: "center",
        minHeight: "180px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // CENTER CONTENT
          padding: "20px",
          border: "2px solid #dee2e6",
          borderRadius: "10px",
          minHeight: "110px",
          minWidth: "450px",
          background: "#ffffff",
          position: "relative",
          gap: "14px",
        }}
      >
        {queue.length === 0 ? (
          <div
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#6c757d",
            }}
          >
            Queue is Empty
          </div>
        ) : (
          queue.map((item, index) => (
            <div
              key={index}
              id={`queue-item-${index}`}
              className="queue-item"
              style={{
                width: "70px",
                height: "70px",
                background: "#0d6efd",
                color: "white",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "16px",
                position: "relative",
              }}
            >
              {item}

              {/* FRONT */}
              {index === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    background: "#198754",
                    color: "white",
                    padding: "3px 10px",
                    fontSize: "12px",
                    borderRadius: "20px",
                    fontWeight: "600",
                  }}
                >
                  FRONT
                </div>
              )}

              {/* REAR */}
              {index === queue.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    background: "#dc3545",
                    color: "white",
                    padding: "3px 10px",
                    fontSize: "12px",
                    borderRadius: "20px",
                    fontWeight: "600",
                  }}
                >
                  REAR
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default QueueAnimate;
