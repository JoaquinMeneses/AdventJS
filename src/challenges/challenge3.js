function findNaughtyStep(original, modified) {
  let giftOriginal = original,
    giftModified = modified;
  if (original.length > modified.length) {
    giftOriginal = modified;
    giftModified = original;
  }
  return [...giftModified].find((char, i) => char !== giftOriginal[i]) ?? "";
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified));

const original1 = "stepfor";
const modified1 = "stepor";
console.log(findNaughtyStep(original1, modified1));

const original2 = "abcde";
const modified2 = "abcde";
console.log(findNaughtyStep(original2, modified2));
