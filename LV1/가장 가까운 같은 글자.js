function solution(s) {
  const stack = [];
  const distance = [];

  for (let txt of s) {
    if (stack.includes(txt))
      distance.push(stack.length - stack.lastIndexOf(txt));
    else distance.push(-1);

    stack.push(txt);
  }

  return distance;
}
