function solution(cards1, cards2, goal) {
  let existCardCnt = 0;

  goal.forEach((v, idx) => {
    if (cards1[0] === goal[idx]) {
      cards1.shift();
      existCardCnt++;
    } else if (cards2[0] === goal[idx]) {
      cards2.shift();
      existCardCnt++;
    }
  });

  return existCardCnt === goal.length ? "Yes" : "No";
}
