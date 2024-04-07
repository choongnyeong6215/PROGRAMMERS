function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  words.forEach((v, idx) => {
    s = s.replaceAll(v, idx);
  });

  return Number(s);
}
