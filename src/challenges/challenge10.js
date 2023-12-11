function createChristmasTree(ornaments, height) {
  const totalChars = (height * (height + 1)) / 2;
  const repeatQuot = totalChars / ornaments.length;
  const allChars = [...ornaments.repeat(repeatQuot + 1)].join(" ");
  let ans = "";
  let index = 0;
  const spaces = " ".repeat(height - 1);
  for (let i = 0; i < height; ++i) {
    const orns = allChars.substring(index, index + 2 * i + 1);
    const row = `${spaces.substring(i)}${orns}\n`;
    index += 2 * (i + 1);
    ans += row;
  }
  return `${ans}${" ".repeat(height - 1)}|\n`;
}

console.log(createChristmasTree("x", 3));

console.log(createChristmasTree("xo", 4));

console.log(createChristmasTree("123", 5));

console.log(createChristmasTree("*@o", 3));
