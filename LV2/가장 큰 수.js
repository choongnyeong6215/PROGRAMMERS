function solution(numbers) {
  numbers.sort((a, b) => {
    // 4자리로 고정해 내림차순 정렬
    const aFDigits = a.toString().repeat(4).slice(0, 4);
    const bFDigits = b.toString().repeat(4).slice(0, 4);

    return bFDigits - aFDigits;
  });
  // 0만 들어있는 경우 예외 처리
  return numbers.reduce((accr, curv) => accr + Number(curv), 0)
    ? numbers.join("")
    : "0";
}
