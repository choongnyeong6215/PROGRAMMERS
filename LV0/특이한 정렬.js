function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aDist, bDist] = [Math.abs(n - a), Math.abs(n - b)];

    if (aDist === bDist) return b - a;
    else return aDist - bDist;
  });
}
