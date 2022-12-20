function getRandomNumberOfTacos() {
  const TACO_EMOJI = "🌮";
  const min = Math.ceil(1);
  const max = Math.floor(10);
  const numbersOfTacos = Math.floor(Math.random() * (max - min + 1)) + min;

  const tacos = new Array(numbersOfTacos).fill(TACO_EMOJI, 0, numbersOfTacos);

  return tacos; // replace this empty tray array
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join("");
}

document.getElementById("tray").innerHTML = putTacosOnTray();
