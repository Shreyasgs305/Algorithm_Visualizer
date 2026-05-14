export function runSJFPreemptive(arrival, burst) {
  const n = arrival.length;

  let remaining = [...burst];
  let completion = Array(n).fill(0);
  let tat = Array(n).fill(0);
  let wt = Array(n).fill(0);
  let rt = Array(n).fill(-1);
  let gantt = [];

  let currentTime = 0;
  let completed = 0;
  let lastProcess = -1;

  while (completed < n) {
    let idx = -1;
    let minRemaining = Infinity;

    for (let i = 0; i < n; i++) {
      if (
        arrival[i] <= currentTime &&
        remaining[i] > 0 &&
        remaining[i] < minRemaining
      ) {
        minRemaining = remaining[i];
        idx = i;
      }
    }

    if (idx === -1) {
      currentTime++;
      continue;
    }

    // First response time
    if (rt[idx] === -1) {
      rt[idx] = currentTime - arrival[idx];
    }

    // New block if process changes
    if (lastProcess !== idx) {
      gantt.push({
        process: "P" + (idx + 1),
        start: currentTime,
        end: currentTime + 1,
      });
    } else {
      gantt[gantt.length - 1].end++;
    }

    remaining[idx]--;
    currentTime++;
    lastProcess = idx;

    if (remaining[idx] === 0) {
      completion[idx] = currentTime;
      tat[idx] = completion[idx] - arrival[idx];
      wt[idx] = tat[idx] - burst[idx];
      completed++;
    }
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
