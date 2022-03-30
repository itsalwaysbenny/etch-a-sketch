function makeBoard(x) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    board.style.gridTemplateRows = `repeat(${x}, 1fr)`

    for (let i = 0; i < (x * x); i++) {
        let gridSquare = document.createElement("div");
        board.insertAdjacentElement("beforeend", gridSquare);
    };
};

makeBoard(16);

function changeSize(value) {
    makeBoard(value)
};