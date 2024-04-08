function solution(sizes) {
  const width = [];
  const height = [];

  sizes.forEach((v) => {
    const x = Math.max(v[0], v[1]);
    const y = Math.min(v[0], v[1]);

    width.push(x);
    height.push(y);
  });

  return Math.max(...width) * Math.max(...height);
}
