function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  // 1,2 좌표 연결선, 3,4 좌표 연결선 평행 체크
  // 기울기 같으면 무조건 평행임
  if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;

  //  1,3 좌표 연결선, 2, 4 좌표 연결선 평행 체크
  if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;

  // 1, 4 좌표 연결선, 2, 3 좌표 연결선 평행 체크
  if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;

  return 0;
}
