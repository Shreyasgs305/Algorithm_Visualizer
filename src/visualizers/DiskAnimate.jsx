import { useEffect, useRef } from "react";
import anime from "animejs";

function DiskAnimate({ sequence }) {
  const pathRef = useRef(null);
  const headRef = useRef(null);

  if (!sequence || sequence.length === 0) return null;

  const width = 800;
  const height = 450;
  const padding = 70;
  const maxTrack = 199;

  const scaleX = (track) =>
    padding + (track / maxTrack) * (width - 2 * padding);

  const scaleY = (index) =>
    padding + index * ((height - 2 * padding) / (sequence.length - 1 || 1));

  const points = sequence.map((track, index) => ({
    x: scaleX(track),
    y: scaleY(index),
  }));

  const pathData = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  useEffect(() => {
    if (!pathRef.current || !headRef.current) return;

    const pathLength = pathRef.current.getTotalLength();

    anime.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    anime({
      targets: pathRef.current,
      strokeDashoffset: [pathLength, 0],
      easing: "easeInOutSine",
      duration: 6000,
    });

    anime({
      targets: headRef.current,
      translateX: points.map((p) => p.x - points[0].x),
      translateY: points.map((p) => p.y - points[0].y),
      easing: "easeInOutSine",
      duration: 6000,
    });
  }, [sequence]);

  return (
    <div style={{ overflowX: "auto", marginTop: "50px" }}>
      <svg width={width} height={height}>
        {/* GRID */}
        {[0, 50, 100, 150, 199].map((val, i) => (
          <line
            key={i}
            x1={scaleX(val)}
            y1={padding}
            x2={scaleX(val)}
            y2={height - padding}
            stroke="#eee"
          />
        ))}

        {/* AXES */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="black"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="black"
        />

        {/* X Axis Numbers */}
        {[0, 50, 100, 150, 199].map((val, i) => (
          <text
            key={i}
            x={scaleX(val)}
            y={height - padding + 20}
            fontSize="12"
            textAnchor="middle"
          >
            {val}
          </text>
        ))}

        {/* Y Axis Step Numbers */}
        {sequence.map((_, i) => (
          <text key={i} x={padding - 25} y={scaleY(i) + 4} fontSize="12">
            {i}
          </text>
        ))}

        {/* 🏷 X Axis Label */}
        <text
          x={width / 2}
          y={height - 20}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
        >
          Track Number
        </text>

        {/* 🏷 Y Axis Label (Rotated) */}
        <text
          x="20"
          y={height / 2}
          transform={`rotate(-90 20 ${height / 2})`}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
        >
          Seek Sequence (Step Order)
        </text>

        {/* PATH */}
        <path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="#009FFF"
          strokeWidth="2.5"
        />

        {/* STATIC POINTS */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="red" />
        ))}

        {/* MOVING HEAD */}
        <circle
          ref={headRef}
          cx={points[0].x}
          cy={points[0].y}
          r="8"
          fill="green"
        />

        {/* TRACK VALUE LABELS */}
        {sequence.map((track, i) => (
          <text
            key={i}
            x={points[i].x}
            y={points[i].y - 10}
            fontSize="11"
            textAnchor="middle"
          >
            {track}
          </text>
        ))}
      </svg>
    </div>
  );
}

export default DiskAnimate;
