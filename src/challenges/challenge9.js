const lights = [1, 0, 0, 0, 0];

function adjustLights(lights) {
  const green = ["🟢", "🔴"];
  let countGreen = 0;
  const red = ["🔴", "🟢"];
  let countRed = 0;

  let index = 0;
  for (const light of lights) {
    countGreen += green[index % 2] !== light;
    countRed += red[index % 2] !== light;
    index++;
  }

  return Math.min(countGreen, countRed);
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (ya están alternadas)

console.log(adjustLights(["🔴", "🔴", "🔴"]));
// -> 1 (cambias la segunda luz a 🟢)
