
const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    while (true) {
        dimension = prompt("How many squares per side would you like?");
        if (dimension <= 100) {
            break;
        }
    }
    deleteGrid();
    createGrid(dimension);
});

function createGrid(dimension = 16) { 
    for (var x = 1; x <= dimension; x++) {
        const row = document.createElement("div");
        row.id = "r"+x;
        row.classList.toggle("row");
        row.style.display = "flex";
        row.style.flex = "1";
        for (var i = 1; i <= dimension; i++) {
            const cell = document.createElement("div");
            cell.style.flex = "1";
            cell.id = `${row.id}c`+i;
            cell.classList.toggle("cell");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue";
        });
    });
}

function deleteGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    })
}

createGrid();