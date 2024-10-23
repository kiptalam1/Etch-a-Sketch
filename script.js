const gridContainer = document.querySelector('.container');
const sizeBtn = document.querySelector('.sizeBtn');
const resetBtn = document.querySelector('.resetBtn');




function createGrid(size) {
    // getGridSize();
    gridContainer.innerHTML = '';
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

sizeBtn.addEventListener('click', () => {
        let size = parseInt(prompt("Enter grid size: "));
        if (!size) {
            alert("Enter a valid input between 1 - 100.");
        } else if (size > 100) {
            size = 100;
        }
        createGrid(size);
        document.documentElement.style.setProperty('--grid-size', size);
    }
    );

resetBtn.addEventListener('click', () => {
    // gridContainer.innerHTML = '';
    createGrid(16);
})

// Initial 16x16 grid layout.
createGrid(16);