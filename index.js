const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).classList.add('grid-item');
}

const cells = document.querySelectorAll('.grid-item');

function hover(e) {
    e.target.classList.toggle('hover')
}

cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) => hover(e));
    cell.addEventListener('mouseout', (e) => hover(e));
});

