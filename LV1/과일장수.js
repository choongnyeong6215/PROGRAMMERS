function solution(k, m, score) {
  let benefit = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const box = score.slice(i, i + m);

    if (box.length === m) {
      benefit += Math.min(...box) * m;
    }
  }

  return benefit;
}
