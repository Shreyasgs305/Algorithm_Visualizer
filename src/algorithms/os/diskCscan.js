export function runDiskCSCAN(requests, head, diskSize) {
  let left = requests.filter((r) => r < head).sort((a, b) => a - b);
  let right = requests.filter((r) => r >= head).sort((a, b) => a - b);

  let sequence = [head];
  let totalSeek = 0;
  let current = head;

  right.forEach((r) => {
    totalSeek += Math.abs(r - current);
    current = r;
    sequence.push(r);
  });

  totalSeek += Math.abs(diskSize - 1 - current);
  current = diskSize - 1;
  sequence.push(current);

  totalSeek += diskSize - 1;
  current = 0;
  sequence.push(current);

  left.forEach((r) => {
    totalSeek += Math.abs(r - current);
    current = r;
    sequence.push(r);
  });

  return { sequence, totalSeek };
}
