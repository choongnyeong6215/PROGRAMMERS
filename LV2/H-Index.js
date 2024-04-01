function solution(citations) {
  let hIndex = 0;

  for (let i = 1; i <= Math.max(...citations); i++) {
    let moreHQuotation = [];
    let lessHQuotation = [];

    for (let citation of citations) {
      if (citation >= i) moreHQuotation.push(citation);
      else lessHQuotation.push(citation);
    }

    // console.log(i, moreHQuotation, lessHQuotation);

    if (moreHQuotation.length >= i && lessHQuotation.length <= i) hIndex = i;
  }

  return hIndex;
}
