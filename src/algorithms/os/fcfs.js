export function runFCFS(arrival, burst) {
  const n = arrival.length;

  let completion = [];
  let tat = [];
  let wt = [];
  let rt = [];

  let gantt = [];

  let currentTime = 0;

  for (let i = 0; i < n; i++) {
    if (currentTime < arrival[i]) {
      currentTime = arrival[i];
    }

    rt[i] = currentTime - arrival[i];

    gantt.push({
      process: "P" + (i + 1),
      start: currentTime,
      end: currentTime + burst[i],
    });

    currentTime += burst[i];
    completion[i] = currentTime;

    tat[i] = completion[i] - arrival[i];
    wt[i] = tat[i] - burst[i];
  }

  return {
    GanttChart: gantt,
    CompletionTime: completion,
    TAT: tat,
    WT: wt,
    RT: rt,
    Arrival: arrival,
    Burst: burst,
  };
}
