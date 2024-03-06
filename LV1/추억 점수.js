function solution(k, score) {
  const grade = [];
  const last = [];

  score.forEach((v) => {
    grade.push(v);

    // k 이후 등수 모두 제거
    grade.sort((a, b) => b - a).splice(k);

    last.push(Math.min(...grade));
  });

  return last;
}
