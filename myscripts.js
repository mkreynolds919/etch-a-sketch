
const container = document.querySelector(".container");

for (var x = 1; x <= 16; x++) {
    const row = document.createElement("div");
    row.id = "r"+x;
    row.style.display = "flex";
    row.style.flex = "1";
    for (var i = 1; i <= 16; i++) {
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
    })
})