function solution(array, commands) {
  const answer = [];

  for (let s = 0; s < commands.length; s++) {
    const i = commands[s][0];
    const j = commands[s][1];
    const k = commands[s][2];

    const sliceArr = array.slice(i - 1, j).sort((a, b) => a - b);

    answer.push(sliceArr[k - 1]);
  }

  return answer;
}
