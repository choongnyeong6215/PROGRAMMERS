function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let accumulator = 0;

  A.forEach((v, idx) => {
    accumulator += A[idx] * B[idx];
  });

  return accumulator;
}
