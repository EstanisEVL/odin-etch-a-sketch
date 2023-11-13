const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".btn-new");
const clearGridBtn = document.querySelector(".btn-clear");

let mouseDown = false;
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

  e.target.style.backgroundColor = "black";
}

newGridBtn.addEventListener("click", createGrid);
clearGridBtn.addEventListener("click", clearGrid);