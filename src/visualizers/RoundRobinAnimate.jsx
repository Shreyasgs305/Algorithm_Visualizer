import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function RoundRobinAnimate({ data }) {
  if (!data?.GanttChart?.length) return null;

  const total = data.GanttChart.reduce(
    (sum, item) => sum + (item.end - item.start),
    0,
  );

  useEffect(() => {
    const timeline = anime.timeline({ easing: "easeOutQuad" });

    data.GanttChart.forEach((item, index) => {
      const duration = item.end - item.start;

      timeline.add({
        targets: `.rr-block-${index}`,
        scaleX: [0, 1],
        duration: (duration / total) * 5000,
      });
    });
  }, [data, total]);

  return (
    <div style={{ width: "85%", margin: "40px auto" }}>
      {/* Gantt Blocks */}
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          height: "60px",
        }}
      >
        {data.GanttChart.map((item, index) => {
          const duration = item.end - item.start;
          const flex = duration / total;

          return (
            <div
              key={index}
              className={`rr-block-${index}`}
              style={{
                flex,
                background: "#4CAF50",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transformOrigin: "left",
                transform: "scaleX(0)",
                borderRight: "1px solid white",
              }}
            >
              {item.process}
            </div>
          );
        })}
      </div>

      {/* Time Labels */}
      <div
        style={{
          display: "flex",
          marginTop: "5px",
          fontWeight: "bold",
        }}
      >
        <div>{data.GanttChart[0].start}</div>

        {data.GanttChart.map((item, index) => {
          const duration = item.end - item.start;
          const flex = duration / total;

          return (
            <div key={index} style={{ flex, textAlign: "right" }}>
              {item.end}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoundRobinAnimate;
