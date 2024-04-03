function solution(s) {
  let convertCnt = 0; // 이진 변환 횟수
  let removeZeroCnt = 0; // 0 제거 개수

  while (s.length > 1) {
    const zeroCnt = s.replace(/1/g, "").length; // 0 개수
    const updateS = s.replace(/0/g, "").length; // 0 제거 후 길이

    removeZeroCnt += zeroCnt;
    convertCnt++;

    s = updateS.toString(2);
  }

  return [convertCnt, removeZeroCnt];
}
