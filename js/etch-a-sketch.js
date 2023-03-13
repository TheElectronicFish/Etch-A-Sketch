let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');
let grid = document.querySelector('.grid');
let shading = document.querySelector('.shading')


let currentColor = "rgb(0, 0, 0)";

let currentChoice = null;

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
            grid.appendChild(square);
        }
    }

function removeSquares(parent) {
    // another way of doing it
    // 
    // while(grid.firstChild) {
    //     grid.removeChild(grid.lastChild);
    // }
    parent.innerHTML='';
}

function syncSquares () {
    squares = document.querySelectorAll('.square');
    // grid.addEventListener('mousedown', () => {
    // })
    }

valueDisplay.textContent = `${slider.value} x ${slider.value}`;
createSquares(slider.value);
syncSquares();

// Tried to make holding click work on the etcha sketch
let mouseDown = false;

document.body.addEventListener('mousedown', () => {
    mouseDown = true;
    if (mouseDown) {console.log(mouseDown)};
});
document.body.addEventListener('mouseup', () => {
    mouseDown = false;
    console.log(mouseDown);
});

// document.body.onmousedown = () => (mouseDown = true);
// document.body.onmouseup = () => (mouseDown = false);



slider.addEventListener('input', () => {
    valueDisplay.textContent = `${slider.value} x ${slider.value}`;
});

slider.addEventListener('mouseup', () => {
    removeSquares(grid);
    createSquares(slider.value);
    syncSquares();
});




if (mouseDown == true) {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = currentColor;
        })
    });
}



