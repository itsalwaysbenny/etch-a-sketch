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

makeBoard(16);

function changeSize(value) {
  if (value < 10 || value > 100) {
      console.log("Pick a value between 10 and 100");
  } else {
      makeBoard(value)
  }
};

// I did not expect this to be the correct Id to get
//I was expecting it to be the gridSquare id
let mouseOver = document.getElementById("board")

mouseOver.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = "blue"
});

//function to clear board
