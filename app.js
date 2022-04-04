const gridSize = document.getElementById(["grid-size"])

//I did not expect this to be the correct Id to get to change colour
//I was expecting it to be the gridSquare id
const mouseOver = document.getElementById("board")

//reset button id
const clearGrid = document.getElementById(["clear-grid"]);

//function to create board
function makeBoard(x) {
  let board = document.querySelector(".board");
  //deletes all squares already on the board
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${x}, 1fr)`
  board.style.gridTemplateRows = `repeat(${x}, 1fr)`
  for (let i = 0; i < (x * x); i++) {
      let gridSquare = document.createElement("div");
      gridSquare.id = "gridSquare";
      board.insertAdjacentElement("beforeend", gridSquare);
  };
};
//creates initial board when page starts
makeBoard(16);

//allows change to number of squares in the grid
function setGridSize(value) {
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
  e.target.style.backgroundColor = "blue"
});

//function to clear board
//deletes all inner divs as in make grid function above 
//but leaves only 1 on the board and even new make grid does not
//seem to change the colour back
function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
}

clearGrid.addEventListener("click", clearBoard);