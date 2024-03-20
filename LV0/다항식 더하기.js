function solution(polynomial) {
  const polyArr = polynomial.split(" + ");

  // X 존재유무
  let isX = 0;
  let isNX = 0;

  polyArr.forEach((v) => {
    if (v.includes("x")) {
      const num = v.split("x")[0];

      if (num === "") isX += 1;
      else isX += Number(num);
    } else {
      isNX += Number(v);
    }
  });

  if (isX === 0 && isNX === 0) return "0";

  if (isX === 0 && isNX !== 0) return `${isNX}`;

  if (isX !== 0 && isNX !== 0)
    return isX === 1 ? `x + ${isNX}` : `${isX}x + ${isNX}`;

  if (isX !== 0 && isNX === 0) return isX === 1 ? `x` : `${isX}x`;
}
