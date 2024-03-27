const container = document.querySelector('.container')
const button = document.querySelector('.button')

const gridSize = 600;
let heightWidth = 16;

container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

function createGrid (heightWidth) {
for (let i = 0; i < (heightWidth**2); i++) {
        const grid = document.createElement('div')
        grid.classList.add('grid')
        

        grid.style.width = `${(gridSize / heightWidth) - 2}px`
        grid.style.height = `${(gridSize / heightWidth) - 2}px`

        container.appendChild(grid);
        
        grid.addEventListener ('mouseover', () => {
            grid.style.backgroundColor = 'red';
    })
}
}

button.addEventListener('click', () => {
    let input = prompt ("Enter Height and Width (1 number)")
    while (input > 100) {
        input = 100;
    }
   removeGrid()
   createGrid(input);
   
})

function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
createGrid(16)

    


