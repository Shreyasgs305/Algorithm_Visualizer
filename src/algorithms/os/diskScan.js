export function runDiskSCAN(requests, head, diskSize, direction = "right") {
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

    totalSeek += Math.abs(diskSize - 1 - current);
    current = diskSize - 1;
    sequence.push(current);

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

    totalSeek += Math.abs(current - 0);
    current = 0;
    sequence.push(current);

    right.forEach((r) => {
      totalSeek += Math.abs(r - current);
      current = r;
      sequence.push(r);
    });
  }

  return { sequence, totalSeek };
}
