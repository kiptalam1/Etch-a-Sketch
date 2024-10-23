const gridContainer = document.querySelector('.container');


function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const newDivs = document.createElement('div')
        newDivs.classList.add("div" + i);
        gridContainer.appendChild(newDivs);
        console.log(newDivs);
    }
}

createGrid(16);