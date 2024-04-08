function solution(s, skip, index) {
  let code = "";

  s.split("").forEach((v) => {
    let asciiCode = v.charCodeAt();

    for (let i = 1; i <= index; i++) {
      asciiCode++;

      if (asciiCode > 122) asciiCode -= 26;

      while (skip.includes(String.fromCharCode(asciiCode))) {
        asciiCode++;

        if (asciiCode > 122) asciiCode -= 26;
      }
    }

    code += String.fromCharCode(asciiCode);
  });

  return code;
}
