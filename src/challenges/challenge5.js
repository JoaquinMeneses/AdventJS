function cyberReindeer(road, time) {
  let tmpl = road.replace("S", ".");
  const res = [road];
  for (let t = 2, pos = road.indexOf('S'); t <= time; t++) {
    const nextChar = tmpl[pos + 1];
    if (nextChar !== "|") {
      pos++;
    }
    const frameStart = tmpl.substring(0, pos);
    const frameEnd = tmpl.substring(pos + 1);
    res.push(frameStart + "S" + frameEnd);
    if (t === 5) {
      tmpl = tmpl.replace(/\|/g, "*");
    }
  }
  return res;
}

const road = 'S..|...|..'
const time = 10
const result = cyberReindeer(road, time)
console.log(result)
