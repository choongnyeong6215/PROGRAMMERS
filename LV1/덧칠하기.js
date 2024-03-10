function solution(n, m, section) {
  let cnt = 0;
  let painted = 0;

  section.forEach((v) => {
    // 현재 구역이 칠한 구역보다 큰 경우
    if (v > painted) {
      // 현재까지 칠한 구역 업데이트
      painted = v + m - 1;

      cnt++;
    }
  });

  return cnt;
}
