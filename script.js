const gridContainer = document.querySelector('.container');
const sizeBtn = document.querySelector('.sizeBtn');
const resetBtn = document.querySelector('.resetBtn');


let size = 16;

function createGrid(size) {
    // getGridSize();
    gridContainer.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add("square");
        gridContainer.appendChild(square);
        square.addEventListener('mouseover', () => changeColor(square));
    }
}

function changeColor(square) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    square.style.backgroundColor = randomColor;

    // Optionally, you can implement the darkening effect here
    // let currentOpacity = parseFloat(square.dataset.opacity) || 0.1;
    // currentOpacity = Math.min(currentOpacity + 0.1, 1);
    // square.style.opacity = currentOpacity;
    // square.dataset.opacity = currentOpacity;
}

sizeBtn.addEventListener('click', () => {
        size = parseInt(prompt("Enter grid size: "));
        if (!size || size < 1) {
            alert("Enter a valid input between 1 - 100.");
            size = 16;
        } else if (size > 100) {
            size = 100;
        }
        createGrid(size);
        document.documentElement.style.setProperty('--grid-size', size);
    }
    );

resetBtn.addEventListener('click', () => {
    const squares = gridContainer.querySelectorAll('.square');
    const containerColor = getComputedStyle(document.documentElement)
                        .getPropertyValue('--container-clr');
    squares.forEach(square => {
        square.style.backgroundColor = containerColor.trim(); // Reset color to white or your desired color
    });
})


// Initial 16x16 grid layout.
createGrid(size);