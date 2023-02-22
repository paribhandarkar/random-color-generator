const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container");

generateColor();

function generateColor() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newHexCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newHexCode;
    colorContainerEl.innerText = "#" + newHexCode;
  });
}

function randomColor() {
  const chars = "1234567890acbdef";
  let hexcode = "";
  for (let index1 = 0; index1 < 6; index1++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    const randomCharacter = chars.substring(randomNum, randomNum + 1);
    hexcode = hexcode + randomCharacter;
  }
  return hexcode;
}
