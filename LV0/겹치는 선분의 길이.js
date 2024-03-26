function solution(lines) {
  const line = Array.from({ length: 200 }).fill(0);

  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      line[j + 100]++;
    }
  }

  return line.filter((v) => v >= 2).length;
}
