// 최초 풀이 (시간 초과)
function solution(number, limit, power) {
  let weapon = [];

  for (let i = 1; i <= number; i++) {
    let knight = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) knight++;
    }
    weapon.push(knight);
  }

  let needIron = 0;

  for (let item of weapon) {
    if (item <= limit) needIron += item;
    else if (item > limit) needIron += power;
  }

  return needIron;
}

// 시간복잡도 해결
function solution(number, limit, power) {
  let needIron = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (j == Math.sqrt(i)) cnt++;
        // 원래 값까지 추가
        else cnt += 2;
      }
    }
    if (cnt <= limit) needIron += cnt;
    else needIron += power;
  }

  return needIron;
}
