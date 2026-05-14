import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function FcfsAnimate({ data }) {
  if (!data?.GanttChart || data.GanttChart.length === 0) {
    return null;
  }

  const totalBurst = data.GanttChart.reduce(
    (sum, item) => sum + (item.end - item.start),
    0,
  );

  useEffect(() => {
    if (!data?.GanttChart) return;

    const timeline = anime.timeline({
      easing: "easeOutQuad",
    });

    data.GanttChart.forEach((item, index) => {
      const burst = item.end - item.start;

      timeline.add({
        targets: `.gantt-block-${index}`,
        scaleX: [0, 1],
        duration: (burst / totalBurst) * 4000, // duration proportional to burst
      });
    });
  }, [data, totalBurst]);

  return (
    <div
      style={{
        width: "85%",
        margin: "40px auto",
      }}
    >
      {/* 🔥 Gantt Chart */}
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          height: "60px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {data.GanttChart.map((item, index) => {
          const burst = item.end - item.start;
          const flexValue = burst / totalBurst;

          return (
            <div
              key={index}
              className={`gantt-block-${index}`}
              style={{
                flex: flexValue,
                background: "#4CAF50",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                borderRight:
                  index !== data.GanttChart.length - 1
                    ? "2px solid white"
                    : "none",
                boxSizing: "border-box",
                transformOrigin: "left",
                transform: "scaleX(0)", // important for animation
              }}
            >
              {item.process}
            </div>
          );
        })}
      </div>

      {/* 🔥 Time Row */}
      <div
        style={{
          display: "flex",
          marginTop: "6px",
          fontWeight: "bold",
        }}
      >
        {/* Start Time */}
        <div style={{ flex: 0 }}>0</div>

        {data.GanttChart.map((item, index) => {
          const burst = item.end - item.start;
          const flexValue = burst / totalBurst;

          return (
            <div
              key={index}
              style={{
                flex: flexValue,
                textAlign: "right",
              }}
            >
              {item.end}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FcfsAnimate;
