//sets the default grid size for starting board
const DEAFULT_GRID_SIZE = 16;
let currentGridSize = DEAFULT_GRID_SIZE;

//setdefault for background and mouseover colours
const DEFAULT_BACKGROUND_COLOUR = "rgb(255, 255, 255)";
let currentBackgroundColour = DEFAULT_BACKGROUND_COLOUR;
const DEFAULT_MOUSEOVER_COLOUR = "rgb(0, 0, 0)";
let currentMouseoverColour = DEFAULT_MOUSEOVER_COLOUR;

//function to create board
function makeBoard(x) {
  let board = document.querySelector(".board");
  //deletes all squares already on the board
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${x}, 1fr)`
  board.style.gridTemplateRows = `repeat(${x}, 1fr)`
  board.style.backgroundColor = currentBackgroundColour;
  for (let i = 0; i < (x * x); i++) {
      let gridSquare = document.createElement("div");
      gridSquare.id = "gridSquare";
      board.insertAdjacentElement("beforeend", gridSquare);
  };
};
//creates initial board when page starts
makeBoard(DEAFULT_GRID_SIZE)

//button for setting the new gridsize
const gridSize = document.getElementById(["grid-size"])

//allows change to number of squares in the grid
function setGridSize(value) {
  currentGridSize = value;
  //clears input each time the function is run
  gridSize.value = ""
  if (value < 10 || value > 100) {
      console.log("Pick a value between 10 and 100");
  } else {
      makeBoard(value)
  }
};

//changes colour of individual squares on mouseover
//I did not expect this to be the correct Id to get to draw on the board
//I was expecting it to be the gridSquare id
const mouseOver = document.getElementById("board")

mouseOver.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = currentMouseoverColour;
});

//function to reset board
//deletes all inner divs as in make grid function above 
//creates a new grid with 16 same as first loading page
const resetGrid = document.getElementById(["reset-grid"]);

function resetBoard() {
  currentGridSize = DEAFULT_GRID_SIZE;
  currentBackgroundColour = DEFAULT_BACKGROUND_COLOUR;
  currentMouseoverColour = DEFAULT_MOUSEOVER_COLOUR;
  board.innerHTML = "";
  makeBoard(currentGridSize)
};

resetGrid.addEventListener("click", resetBoard);

//make a function to clear grid but keep same size
//clear grid button
const clearGrid = document.getElementById(["clear-grid"]);

function clearBoard() {
  board.innerHTML = "";
  makeBoard(currentGridSize);
};

clearGrid.addEventListener("click", clearBoard);

//Eraser button
const eraser = document.getElementById(["eraser"])

eraser.addEventListener("click", erase);

function erase() {
  currentMouseoverColour = currentBackgroundColour;
}

//Change the background Colour, erases all drawings
const backgroundColorBlack = document.getElementById(["background-black"])

backgroundColorBlack.addEventListener("click", makeBackgroundColourBlack);

function makeBackgroundColourBlack() {
  currentMouseoverColour = "rgb(255, 255, 255)";
  currentBackgroundColour = "rgb(0, 0, 0)";
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = currentBackgroundColour);
};

//Change the background Colour, erases all drawings
const backgroundColorWhite = document.getElementById(["background-white"])

backgroundColorWhite.addEventListener("click", makeBackgroundColourWhite);

function makeBackgroundColourWhite() {
  currentMouseoverColour = "rgb(0, 0, 0)";
  currentBackgroundColour = "rgb(255, 255, 255)";
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = currentBackgroundColour);
};

//chooses a random colour to draw with
const randomColour = document.getElementById(["mouseover-random"])

randomColour.addEventListener("click", randomiseColour);

function randomiseColour() {
  let RGBColourR = (Math.floor( Math.random() * 256));
  let RGBColourG = (Math.floor( Math.random() * 256));
  let RGBColourB = (Math.floor( Math.random() * 256));
  let colourRandom = `rgb(${RGBColourR},${RGBColourG},${RGBColourB})`;
  console.log(currentMouseoverColour)
  currentMouseoverColour = colourRandom;
  console.log(currentMouseoverColour)
};