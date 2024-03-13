function solution(dartResult) {
  // 10 고려해서 여러 글자 체크
  const regexp = /\d+|\D/g;

  const dartArr = dartResult.match(regexp);

  const score = [];

  dartArr.forEach((v, idx) => {
    if (v === "S") {
      score.push(Math.pow(dartArr[idx - 1], 1));
    }

    if (v === "D") {
      score.push(Math.pow(dartArr[idx - 1], 2));
    }

    if (v === "T") {
      score.push(Math.pow(dartArr[idx - 1], 3));
    }

    if (v === "*") {
      score[score.length - 1] *= 2;
      score[score.length - 2] *= 2;
    }

    if (v === "#") {
      score[score.length - 1] = -score[score.length - 1];
    }
  });

  return score.reduce((accr, curv) => accr + curv, 0);
}
