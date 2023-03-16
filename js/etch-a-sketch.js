let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');
let grid = document.querySelector('.grid');
let black = document.querySelector('.black');
let color = document.querySelector('.color');
let colorSelection = document.querySelector('.colorSelector');
let shading = document.querySelector('.shading');
let rainbow = document.querySelector('.rainbow');
let border = document.querySelector('.border')
let clear = document.querySelector('.clear');

let mouseDown = false;
let currentColor = '#000000';
let shadingToggle = false;
let rainbowToggle = false;

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
        square.addEventListener('mouseover', (e) => {
            if (mouseDown) {
                if(shadingToggle) {
                //     var r = square.style.r;
                //     var g = square.style.g;
                //     var g
                    CurColor = square.style.backgroundColor;
                    console.log(CurColor);
                //     square.style.backgroundColor = 
                }else if(rainbowToggle) {
                    var r = (Math.random() * 255);
                    var g = (Math.random() * 255);
                    var b = (Math.random() * 255);

                    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }else{
                    square.style.backgroundColor = currentColor;
                };
            };
        });
        square.ondragstart = function() {
            return false;
          };
    });
    }

// function shadeSquares () {
//     if (shadingToggle) {
//         squares.forEach(square) => {
//             square.addEventListener();
//         };
//         prevColor = 'blue';
//     }else if (shadingToggle == false) {
//         return;
//     }
// }

valueDisplay.textContent = `${slider.value} x ${slider.value}`;
createSquares(slider.value);
syncSquares();


document.body.addEventListener('mousedown', () => {
    mouseDown = true;
    console.log(mouseDown);
})

document.body.addEventListener('mouseup', () => {
    mouseDown = false;
    console.log(mouseDown);
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
    rainbowToggle = false;
    shadingToggle = false;
    currentColor = '#000000';
})

color.addEventListener('click', () => {
    rainbowToggle = false;
    shadingToggle = false;
    currentColor = colorSelection.value;
})

colorSelection.addEventListener('input', () => {
    currentColor = colorSelection.value;
})

shading.addEventListener('click', () => {
    if (shadingToggle == false) {
        shadingToggle = true;
        rainbowToggle = false;
        // shadeSquares();
    }else if(shadingToggle == true){ 
        shadingToggle = false;
    }
})

rainbow.addEventListener('click', () => {
    shadingToggle = false;
    if (rainbowToggle == false) {
        rainbowToggle = true;
    }else if (rainbowToggle = true) {
        rainbowToggle = false;
    }
})

border.addEventListener('click', () => {
    squares.forEach(square => {
        square.classList.toggle('no-border');
    });
})

clear.addEventListener('click', () => {
    removeSquares(grid);
    createSquares(slider.value);
    syncSquares();
})







