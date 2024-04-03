function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let continuousNum = i;

    while (sum < n) {
      sum += continuousNum;

      // 다음 숫자 누적해 비교
      continuousNum++;
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
}
