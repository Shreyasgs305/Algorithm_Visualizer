export function runSJFNonPreemptive(arrival, burst) {
  const n = arrival.length;

  let completion = Array(n).fill(0);
  let tat = Array(n).fill(0);
  let wt = Array(n).fill(0);
  let rt = Array(n).fill(0);
  let gantt = [];

  let visited = Array(n).fill(false);
  let currentTime = 0;
  let completed = 0;

  while (completed < n) {
    let idx = -1;
    let minBurst = Infinity;

    // Find shortest burst among arrived
    for (let i = 0; i < n; i++) {
      if (arrival[i] <= currentTime && !visited[i] && burst[i] < minBurst) {
        minBurst = burst[i];
        idx = i;
      }
    }

    // If no process arrived → jump to next arrival
    if (idx === -1) {
      let nextArrival = Infinity;
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          nextArrival = Math.min(nextArrival, arrival[i]);
        }
      }
      currentTime = nextArrival;
      continue;
    }

    rt[idx] = currentTime - arrival[idx];

    gantt.push({
      process: "P" + (idx + 1),
      start: currentTime,
      end: currentTime + burst[idx],
    });

    currentTime += burst[idx];

    completion[idx] = currentTime;
    tat[idx] = completion[idx] - arrival[idx];
    wt[idx] = tat[idx] - burst[idx];

    visited[idx] = true;
    completed++;
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
