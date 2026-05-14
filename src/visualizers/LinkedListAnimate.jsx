import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

function LinkedListAnimate({ list }) {
  const prevLength = useRef(0);

  useEffect(() => {
    if (list.length > prevLength.current) {
      const newIndex = list.length - 1;

      anime({
        targets: `#node-${newIndex}`,
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: "easeOutBack",
        duration: 400,
      });
    }

    prevLength.current = list.length;
  }, [list]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        minHeight: "150px",
        marginTop: "40px",
      }}
    >
      {list.length === 0 ? (
        <div className="text-muted">Linked List is Empty</div>
      ) : (
        list.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div
              id={`node-${index}`}
              style={{
                width: "80px",
                height: "50px",
                background: "#0d6efd",
                color: "white",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                margin: "5px",
              }}
            >
              {item}
            </div>

            {index !== list.length - 1 && (
              <div
                style={{
                  margin: "0 10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                →
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default LinkedListAnimate;
