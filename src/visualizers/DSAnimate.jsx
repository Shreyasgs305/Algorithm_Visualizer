import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

function DSAnimate({ stack }) {
  const prevStack = useRef([]);

  useEffect(() => {
    const oldStack = prevStack.current;

    // -----------------
    // PUSH ANIMATION
    // -----------------
    if (stack.length > oldStack.length) {
      const newIndex = stack.length - 1;

      anime({
        targets: `#stack-item-${newIndex}`,
        translateY: [-60, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 400,
      });
    }

    // -----------------
    // POP ANIMATION
    // -----------------
    if (stack.length < oldStack.length) {
      anime({
        targets: `.stack-item`,
        translateY: [0, -20, 0],
        easing: "easeOutQuad",
        duration: 300,
      });
    }

    prevStack.current = stack;
  }, [stack]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        minHeight: "300px",
        marginTop: "30px",
      }}
    >
      {stack.length === 0 && (
        <div className="text-muted mt-3">Stack is Empty</div>
      )}

      {stack.map((item, index) => (
        <div
          key={index}
          id={`stack-item-${index}`}
          className="stack-item"
          style={{
            width: "120px",
            height: "50px",
            background: "#009FFF",
            color: "white",
            margin: "5px 0",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          {item}
        </div>
      ))}

      {stack.length > 0 && (
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>↑ TOP</div>
      )}
    </div>
  );
}

export default DSAnimate;
