function organizeGifts(gifts) {
  const regexp = /(\d+)([a-z])/g;
  let match,
    result = "";
  while ((match = regexp.exec(gifts)) !== null) {
    const amount = parseInt(match[1]);
    const letter = match[2];
    const palets = Math.floor(amount / 50);
    const remainingBoxes = Math.floor((amount % 50) / 10);
    const bags = amount % 10;
    result += `[${letter}]`.repeat(palets);
    result += `{${letter}}`.repeat(remainingBoxes);
    result += `(${letter.repeat(bags)})`.repeat(bags > 0);
  }
  return result;
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
