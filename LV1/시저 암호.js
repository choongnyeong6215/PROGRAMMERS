function solution(s, n) {
  let code = "";

  s.split("").forEach((v) => {
    let asciiNum = v.charCodeAt();

    // 대문자
    if (asciiNum >= 65 && asciiNum <= 90) {
      if (asciiNum + n > 90) {
        asciiNum = asciiNum + n - 26;
      } else {
        asciiNum += n;
      }
    }

    // 소문자
    if (asciiNum >= 97 && asciiNum <= 122) {
      if (asciiNum + n > 122) {
        asciiNum = asciiNum + n - 26;
      } else {
        asciiNum += n;
      }
    }

    code += String.fromCharCode(asciiNum);
  });

  return code;
}
