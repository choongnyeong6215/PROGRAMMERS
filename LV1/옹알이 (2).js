function solution(babbling) {
  let cnt = 0;

  for (let item of babbling) {
    // 연속으로 같은 발음 존재하는 경우
    if (/(aya|ye|woo|ma)\1+/g.test(item)) continue;

    // 발음 가능한 단어만 있는 경우
    if (/^(aya|ye|woo|ma)+$/g.test(item)) cnt++;
  }

  return cnt;
}
