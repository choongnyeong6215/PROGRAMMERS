function solution(babbling) {
  const canBabbling = /aya|ye|woo|ma/g;

  // 공백이면 발음 가능한 단어임
  return babbling.map((v) => v.replace(canBabbling, "")).filter((v) => v === "")
    .length;
}
