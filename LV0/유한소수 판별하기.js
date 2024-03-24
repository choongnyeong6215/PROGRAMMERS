function solution(a, b) {
  // 최대 공약수
  let maxDivNum = Math.max(a, b);
  let fraction = [];

  while (maxDivNum > 0) {
    if (a % maxDivNum === 0 && b % maxDivNum === 0) {
      fraction = [a / maxDivNum, b / maxDivNum];
      break;
    } else {
      maxDivNum--;
    }
  }

  // 분모 소인수 분해
  while (fraction[1] % 2 === 0) fraction[1] /= 2;
  while (fraction[1] % 5 === 0) fraction[1] /= 5;

  // 분모기 1이 되면 유한 소수임
  return fraction[1] === 1 ? 1 : 2;
}
