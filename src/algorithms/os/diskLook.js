export function runDiskLOOK(requests, head, direction = "right") {
  let left = requests.filter((r) => r < head).sort((a, b) => b - a);
  let right = requests.filter((r) => r >= head).sort((a, b) => a - b);

  let sequence = [head];
  let totalSeek = 0;
  let current = head;

  if (direction === "right") {
    right.forEach((r) => {
      totalSeek += Math.abs(r - current);
      current = r;
      sequence.push(r);
    });

    left.forEach((r) => {
      totalSeek += Math.abs(r - current);
      current = r;
      sequence.push(r);
    });
  } else {
    left.forEach((r) => {
      totalSeek += Math.abs(r - current);
      current = r;
      sequence.push(r);
    });

    right.forEach((r) => {
      totalSeek += Math.abs(r - current);
      current = r;
      sequence.push(r);
    });
  }

  return { sequence, totalSeek };
}
