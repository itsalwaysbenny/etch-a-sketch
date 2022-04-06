//sets the default grid size for starting board
const DEAFULT_GRID_SIZE = 16;
let currentGridSize = DEAFULT_GRID_SIZE;

//setdefault for background and mouseover colours
const DEFAULT_BACKGROUND_COLOUR = "#ffffff";
let currentBackgroundColour = DEFAULT_BACKGROUND_COLOUR;
const DEFAULT_MOUSEOVER_COLOUR = "#000000";
let currentMouseoverColour = DEFAULT_MOUSEOVER_COLOUR;

//button for setting the new gridsize
const gridSize = document.getElementById(["grid-size"])

//I did not expect this to be the correct Id to get to change colour
//I was expecting it to be the gridSquare id
const mouseOver = document.getElementById("board")

//reset to default button
const resetGrid = document.getElementById(["reset-grid"]);

//clear grid button
const clearGrid = document.getElementById(["clear-grid"]);

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

//allows change to number of squares in the grid
function setGridSize(value) {
  currentGridSize = value;
  console.log(currentGridSize)
  //clears input each time the function is run
  gridSize.value = ""
  if (value < 10 || value > 100) {
      console.log("Pick a value between 10 and 100");
  } else {
      makeBoard(value)
  }
};

//changes colour of individual squares on mouseover
mouseOver.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = currentMouseoverColour;
});

//function to reset board
//deletes all inner divs as in make grid function above 
//creates a new grid with 16 same as first loading page
function resetBoard() {
  currentGridSize = DEAFULT_GRID_SIZE;
  console.log(currentGridSize)
  board.innerHTML = "";
  makeBoard(DEAFULT_GRID_SIZE)
};

resetGrid.addEventListener("click", resetBoard);

//make a function to clear grid but keep same size
function clearBoard() {
  console.log(currentGridSize);
  board.innerHTML = "";
  makeBoard(currentGridSize);
};

clearGrid.addEventListener("click", clearBoard);