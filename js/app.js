const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".btn-new");
const clearGridBtn = document.querySelector(".btn-clear");
const rainbowBtn = document.querySelector(".btn-rainbow");

let mouseDown = false;
let rainbowMode = false;
document.body.onmousedown = () => {mouseDown = true};
document.body.onmouseup = () => {mouseDown = false};

const clearGrid = () => {
  container.innerHTML = "";
}

const createGrid = () => {
  clearGrid();

  let gridSize = prompt("How many squares per side for the new grid? MAX SIZE ALLOWED: 64");

  if(gridSize > 64) return;

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for(let i = 1; i <= Number(gridSize * gridSize); i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", changeColor);
    container.appendChild(div);
  }
}

const changeColor = (e) => {
  if(e.type === "mouseover" && !mouseDown) return;

  const randomColor = Math.floor(Math.random() * 256);

  e.target.style.backgroundColor = rainbowMode ? `rgb(${randomColor}, ${randomColor}, ${randomColor})` : "black";
}

const toggleRainbowMode = () => {
  if(rainbowMode) {
    rainbowMode = false;
  } else {
    rainbowMode = true;
  }
}

newGridBtn.addEventListener("click", createGrid);
clearGridBtn.addEventListener("click", clearGrid);
rainbowBtn.addEventListener("click", toggleRainbowMode);