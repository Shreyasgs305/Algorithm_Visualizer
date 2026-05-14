import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function FloatingClouds() {
  useEffect(() => {
    anime({
      targets: ".cloud-item",
      translateY: [
        { value: -25, duration: 2500 },
        { value: 25, duration: 2500 },
      ],
      rotate: [
        { value: -4, duration: 2000 },
        { value: 4, duration: 2000 },
      ],
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(200),
    });
  }, []);

  const items = [
    "FCFS",
    "SSTF",
    "Stack",
    "Queue",
    "Array",
    "Tree",
    "SCAN",
    "LOOK",
  ];

  return (
    <div className="cloud-container">
      {items.map((item, index) => (
        <div key={index} className={`cloud-item cloud-${index}`}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default FloatingClouds;
