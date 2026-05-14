export function runDiskSSTF(requests, head) {
  let pending = [...requests];
  let sequence = [head];
  let totalSeek = 0;
  let current = head;

  while (pending.length > 0) {
    let nearestIndex = 0;
    let minDistance = Math.abs(pending[0] - current);

    for (let i = 1; i < pending.length; i++) {
      const distance = Math.abs(pending[i] - current);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = i;
      }
    }

    current = pending[nearestIndex];
    totalSeek += minDistance;
    sequence.push(current);
    pending.splice(nearestIndex, 1);
  }

  return { sequence, totalSeek };
}
