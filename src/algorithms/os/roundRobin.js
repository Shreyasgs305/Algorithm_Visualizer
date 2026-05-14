export function runRoundRobin(arrival, burst, quantum) {
  const n = arrival.length;

  if (!quantum || quantum <= 0) {
    throw new Error("Time Quantum must be greater than 0");
  }

  let completion = Array(n).fill(0);
  let tat = Array(n).fill(0);
  let wt = Array(n).fill(0);
  let rt = Array(n).fill(null);
  let gantt = [];

  let remaining = [...burst];
  let currentTime = 0;
  let queue = [];
  let visited = Array(n).fill(false);
  let completed = 0;

  while (completed < n) {
    // Add newly arrived processes
    for (let i = 0; i < n; i++) {
      if (!visited[i] && arrival[i] <= currentTime) {
        queue.push(i);
        visited[i] = true;
      }
    }

    // If queue empty, move time forward
    if (queue.length === 0) {
      currentTime++;
      continue;
    }

    const i = queue.shift();

    // Set response time (first execution only)
    if (rt[i] === null) {
      rt[i] = currentTime - arrival[i];
    }

    const executeTime = Math.min(quantum, remaining[i]);

    gantt.push({
      process: `P${i + 1}`,
      start: currentTime,
      end: currentTime + executeTime,
    });

    currentTime += executeTime;
    remaining[i] -= executeTime;

    // Add processes that arrived during execution
    for (let j = 0; j < n; j++) {
      if (!visited[j] && arrival[j] <= currentTime) {
        queue.push(j);
        visited[j] = true;
      }
    }

    if (remaining[i] > 0) {
      queue.push(i);
    } else {
      completion[i] = currentTime;
      completed++;
    }
  }

  // Calculate TAT & WT
  for (let i = 0; i < n; i++) {
    tat[i] = completion[i] - arrival[i];
    wt[i] = tat[i] - burst[i];
  }

  return {
    Arrival: arrival,
    Burst: burst,
    CompletionTime: completion,
    TAT: tat,
    WT: wt,
    RT: rt,
    GanttChart: gantt,
  };
}
