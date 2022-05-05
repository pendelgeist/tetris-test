const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const COLUMNS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

ctx.canvas.width = COLUMNS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 1, 1);
//ctx.clearRect(0, 0, 1, 1);

ctx.fillStyle = "blue";
ctx.fillRect(0, 10, 1, 1);
ctx.fillRect(0, 11, 1, 1);
ctx.fillRect(1, 10, 1, 1);
ctx.fillRect(1, 11, 1, 1);

ctx.fillStyle = "yellow";
ctx.fillRect(9, 0, 1, 1);
ctx.fillRect(9, 1, 1, 1);
ctx.fillRect(9, 2, 1, 1);
ctx.fillRect(9, 3, 1, 1);

/*
const xDivisions = 255 / COLUMNS;
const yDivisions = 255 / ROWS;

for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    const xColor = Math.floor(255 - xDivisions * x);
    const yColor = Math.floor(255 - yDivisions * y);
    const rgbStyle = `rgb(${xColor}, ${yColor}, 0)`;
    console.log(rgbStyle);
    ctx.fillStyle = rgbStyle;
    ctx.fillRect(x, y, 1, 1);
  }
}
*/

