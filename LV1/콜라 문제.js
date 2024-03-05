function solution(a, b, n) {
  let serviceCola = 0;

  while (n >= a) {
    // 교환받은 콜라
    serviceCola += Math.floor(n / a) * b;

    // 남은 병
    n = Math.floor(n / a) * b + (n % a);
  }

  return serviceCola;
}
