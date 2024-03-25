function solution(N, stages) {
  const stageStatus = new Map();

  for (let i = 1; i <= N; i++) {
    let clearPlayer = 0; // 성공힌 유저
    let failPlayer = 0; // 실패한 유저

    for (let stage of stages) {
      if (stage >= i) clearPlayer++;
      if (stage === i) failPlayer++;
    }

    // 실패율
    let failureRate = failPlayer / clearPlayer;

    stageStatus.set(i, failureRate);
  }

  return Array.from(stageStatus)
    .sort((a, b) => {
      if (a[1] === b[1]) return a[1] - b[1];

      return b[1] - a[1];
    })
    .map((v) => v[0]);
}
