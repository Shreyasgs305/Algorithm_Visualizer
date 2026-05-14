import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

function TreeAnimate({ tree, insertedIndex }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  }, [tree]);

  useEffect(() => {
    if (insertedIndex !== null) {
      anime({
        targets: `#node-${insertedIndex}`,
        scale: [0.5, 1.2, 1],
        opacity: [0, 1],
        easing: "easeOutBack",
        duration: 500,
      });
    }
  }, [insertedIndex]);

  if (tree.length === 0) {
    return <div className="text-muted text-center">Tree is Empty</div>;
  }

  // 🔥 SMALLER SIZES
  const nodeSize = 40; // smaller circle
  const levelHeight = 90; // less vertical gap

  const positions = tree.map((_, index) => {
    const level = Math.floor(Math.log2(index + 1));
    const levelStart = Math.pow(2, level) - 1;
    const indexInLevel = index - levelStart;
    const nodesInLevel = Math.pow(2, level);

    const horizontalSpacing = width / nodesInLevel;
    const x = horizontalSpacing * indexInLevel + horizontalSpacing / 2;
    const y = level * levelHeight + 40;

    return { x, y };
  });

  const treeHeight = Math.floor(Math.log2(tree.length)) * levelHeight + 120;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: treeHeight,
        marginTop: "30px",
      }}
    >
      {/* SVG LINES */}
      <svg
        width="100%"
        height={treeHeight}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {tree.map((_, index) => {
          const left = 2 * index + 1;
          const right = 2 * index + 2;

          return (
            <>
              {left < tree.length && (
                <line
                  key={`l-${index}`}
                  x1={positions[index].x}
                  y1={positions[index].y}
                  x2={positions[left].x}
                  y2={positions[left].y}
                  stroke="#6c757d"
                  strokeWidth="1.5"
                />
              )}
              {right < tree.length && (
                <line
                  key={`r-${index}`}
                  x1={positions[index].x}
                  y1={positions[index].y}
                  x2={positions[right].x}
                  y2={positions[right].y}
                  stroke="#6c757d"
                  strokeWidth="1.5"
                />
              )}
            </>
          );
        })}
      </svg>

      {/* NODES */}
      {tree.map((value, index) => (
        <div
          key={index}
          id={`node-${index}`}
          style={{
            position: "absolute",
            left: positions[index].x - nodeSize / 2,
            top: positions[index].y - nodeSize / 2,
            width: nodeSize,
            height: nodeSize,
            borderRadius: "50%",
            background: "#0d6efd",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "14px", // smaller text
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default TreeAnimate;
