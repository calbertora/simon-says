let sequence = new Array(10)
  .fill(0)
  .map(() => getRandomMax());

function getRandomMax() {
  const COLORS_QUANTITY = 4;
  return Math.floor( Math.random() * COLORS_QUANTITY);
}

console.log(sequence);

function setClickEvent(event) {
  console.log(event);
}