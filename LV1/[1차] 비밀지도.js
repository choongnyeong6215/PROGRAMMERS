function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let binaryNum = (arr1[i] | arr2[i]).toString(2);

    answer.push(binaryNum);
  }

  for (let i = 0; i < n; i++) {
    while (answer[i].length < n) {
      answer[i] = "0" + answer[i];
    }
  }

  for (let i = 0; i < n; i++) {
    answer[i].split("").forEach((v, idx) => {
      if (v === "1") answer[i] = answer[i].replace(/1/g, "#");
      else answer[i] = answer[i].replace(/0/g, " ");
    });
  }

  return answer;
}
