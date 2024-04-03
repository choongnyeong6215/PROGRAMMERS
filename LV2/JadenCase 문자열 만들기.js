function solution(s) {
  const sentence = [];

  s.toLowerCase()
    .split(" ")
    .forEach((word) => {
      let words = "";
      word.split("").forEach((txt, idx) => {
        if (idx === 0 && txt.charCodeAt() >= 97 && txt.charCodeAt() <= 122)
          words += word[idx].toUpperCase();
        else words += word[idx];
      });

      sentence.push(words);
    });

  return sentence.join(" ");
}
