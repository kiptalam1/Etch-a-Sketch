const gridContainer = document.querySelector('.container');


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add("square");
        //square.textContent = "Square" + i;
        gridContainer.appendChild(square);
        //console.log(square);
        square.addEventListener('mouseover', () => changeColor(square));
    }
}

function changeColor(square) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    square.style.backgroundColor = randomColor;
}

createGrid(16);