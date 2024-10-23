const gridContainer = document.querySelector('.container');


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add("square");
        square.textContent = "Square" + i;
        gridContainer.appendChild(square);
        console.log(square);
    }
}

createGrid(16);