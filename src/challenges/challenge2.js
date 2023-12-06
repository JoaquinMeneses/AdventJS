function manufacture(gifts, materials) {
  const canManufactureGift = (gift) => {
    return [...gift].every((char) => materials.includes(char));
  };
  return gifts.filter(canManufactureGift);
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";
console.log(manufacture(gifts, materials));

const gifts1 = ["juego", "puzzle"];
const materials1 = "jlepuz";
console.log(manufacture(gifts1, materials1));

const gifts2 = ["libro", "ps5"];
const materials2 = "psli";
console.log(manufacture(gifts2, materials2));
