function solution(cards1, cards2, goal) {
  const stack = [];

  goal.forEach((v) => {
    if (v === cards1[0]) stack.push(cards1.shift());

    if (v === cards2[0]) stack.push(cards2.shift());
  });

  return goal.join("") === stack.join("") ? "Yes" : "No";
}
