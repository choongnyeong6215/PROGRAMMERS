function solution(k, score) {
  const grade = [];
  const rank = [];

  score.forEach((v) => {
    grade.push(v);

    // k 순위까지 컷팅
    grade.sort((a, b) => b - a).splice(k);

    rank.push(Math.min(...grade));
  });

  return rank;
}
