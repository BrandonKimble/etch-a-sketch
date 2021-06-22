const body = document.querySelector('body');
let cells = document.querySelectorAll('.grid-item');
const button = document.createElement('button');
const container = document.createElement('div');


function generateGrid(dim = 16) {
    clearGrid();
    body.appendChild(container).classList.add('container');
    dim = prompt('How many squares per side for the new grid?');
    container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    if (dim > 100) { return; }
    for (let i = 0; i < dim ** 2; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', fill);
        cell.classList.add('grid-item')
        container.appendChild(cell);
    }
}

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastElementChild);
    }
}

function fill(e) {
    e.target.classList.toggle('hover');
}

button.innerText = 'Clear Grid';
body.appendChild(button).classList.add('button');
button.addEventListener('click', generateGrid);
