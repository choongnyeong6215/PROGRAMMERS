function solution(s) {
  const stack = [];

  // 닫는 괄호로 시작하면 올바른 괄호가 아님
  if (s[0] === ")") return false;

  for (let bracket of s) {
    if (bracket === "(") stack.push("(");
    // 괄호 한쌍 제거
    else stack.pop();
  }

  return stack.length ? false : true;
}
