function solution(array) {
  if (array.length === 1) return array[0];

  const frequentMap = new Map();

  // map 초기화
  for (let i = 0; i <= Math.max(...array); i++) {
    frequentMap.set(i, 0);
  }

  // 빈도수 체크
  for (let num of array) {
    frequentMap.set(num, frequentMap.get(num) + 1);
  }

  const frequentArr = [...frequentMap.values()];
  const mostFrequentNum = Math.max(...frequentArr);

  // 최빈값 중복 체크
  // indexOf === lastIndexOf -> 유일값
  return frequentArr.indexOf(mostFrequentNum) ===
    frequentArr.lastIndexOf(mostFrequentNum)
    ? frequentArr.indexOf(mostFrequentNum)
    : -1;
}
