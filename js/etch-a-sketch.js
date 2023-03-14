let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');
let grid = document.querySelector('.grid');
let black = document.querySelector('.black');
let color = document.querySelector('.color');
let colorSelection = document.querySelector('.colorSelector');
let shading = document.querySelector('.shading');
let rainbow = document.querySelector('.rainbow');
let clear = document.querySelector('.clear');

let mouseDown = false;
let currentColor = '#000000';
let currentChoice = 'black';

// function createSquares(multiplyer) {
//     let rowWidth = grid.clientWidth / multiplyer;
    
//     for (let i = 0; i < multiplyer; i++) {
//         let row = document.createElement('div');
//         row.setAttribute('style', `display: flex; flex-direction: column; height: 100%; width: ${rowWidth}px`);
//         grid.appendChild(row);
//         let squareHeight = row.clientHeight / multiplyer;

//         for (let i = 0; i < multiplyer; i++) {
//             let square = document.createElement('div');
//             square.setAttribute('style', `width: 100%; height: ${squareHeight}px; border: 1px; border-style: solid; background-color: white`);
//             square.classList.add('square');
//             row.appendChild(square);
//         }

//     }
// }

function createSquares(multiplyer) {
        let width = grid.clientWidth / multiplyer;
        let height = grid.clientHeight / multiplyer;

        for (let i = 0; i < (multiplyer * multiplyer); i++) {
            let square = document.createElement('div');
            square.setAttribute('style', `display: flex; flex-direction: row; height: ${height}; width: ${width}px;border: 1px; border-style: solid; background-color: white`);
            square.classList.add('square');
            grid.appendChild(square);
        }
    }

function removeSquares(parent) {
    // another way of doing it
    // 
    // while(grid.firstChild) {
    //     grid.removeChild(grid.lastChild);
    // }
    grid.innerHTML='';
}

function syncSquares () {
    squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            if (mouseDown) {
                square.style.backgroundColor = currentColor;
            };
        })
    });
    }

valueDisplay.textContent = `${slider.value} x ${slider.value}`;
createSquares(slider.value);
syncSquares();


document.body.addEventListener('mousedown', () => {
    mouseDown = true;
})

document.body.addEventListener('mouseup', () => {
    mouseDown = false;
})

slider.addEventListener('input', () => {
    valueDisplay.textContent = `${slider.value} x ${slider.value}`;
})

slider.addEventListener('mouseup', () => {
    removeSquares(grid);
    createSquares(slider.value);
    syncSquares();
})

black.addEventListener('click', () => {
    currentColor = '#000000';
})

color.addEventListener('click', () => {
    currentColor = colorSelection.value;
})

colorSelection.addEventListener('input', () => {
    currentColor = colorSelection.value;
})

clear.addEventListener('click', () => {
    removeSquares(grid);
    createSquares(slider.value);
    syncSquares();
})








