export function runPriorityPreemptive(arrival, burst, priority) {
  const n = arrival.length;

  let remaining = [...burst];
  let completion = Array(n).fill(0);
  let tat = Array(n).fill(0);
  let wt = Array(n).fill(0);
  let rt = Array(n).fill(-1);
  let gantt = [];

  let currentTime = 0;
  let completed = 0;
  let prevProcess = -1;

  while (completed < n) {
    let idx = -1;
    let highestPriority = Infinity;

    // Find highest priority among arrived processes
    for (let i = 0; i < n; i++) {
      if (
        arrival[i] <= currentTime &&
        remaining[i] > 0 &&
        priority[i] < highestPriority
      ) {
        highestPriority = priority[i];
        idx = i;
      }
    }

    // If no process available
    if (idx === -1) {
      currentTime++;
      continue;
    }

    // First response time calculation
    if (rt[idx] === -1) {
      rt[idx] = currentTime - arrival[idx];
    }

    // Gantt chart handling
    if (prevProcess !== idx) {
      gantt.push({
        process: "P" + (idx + 1),
        start: currentTime,
        end: currentTime + 1,
      });
    } else {
      gantt[gantt.length - 1].end++;
    }

    prevProcess = idx;

    remaining[idx]--;
    currentTime++;

    // If process completes
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
    Priority: priority,
  };
}
