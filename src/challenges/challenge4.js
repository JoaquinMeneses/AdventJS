function decode(message) {
  while (message.includes("(")) {
    const start = message.lastIndexOf("(");
    const end = message.indexOf(")", start);
    const sub = message.substring(start + 1, end);
    const reversed = sub.split("").reverse().join("");
    message = message.replace(message.substring(start, end + 1), reversed);
  }
  return message;
}

const a = decode("hola (odnum)");
console.log(a);

const b = decode("(olleh) (dlrow)!");
console.log(b);

const c = decode("sa(u(cla)atn)s");
console.log(c);
