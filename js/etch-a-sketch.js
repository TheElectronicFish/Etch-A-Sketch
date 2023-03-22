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
let currentColor = 'rgb(0, 0, 0)';
let shadingToggle = false;
let rainbowToggle = false;

function createSquares(multiplyer) {
        let width = grid.clientWidth / multiplyer;
        let height = grid.clientHeight / multiplyer;

        for (let i = 0; i < (multiplyer * multiplyer); i++) {
            let square = document.createElement('div');
            square.setAttribute('style', `display: flex; flex-direction: row; height: ${height}; width: ${width}px;border: 1px; border-style: solid; background-color: rgb(255, 255, 255)`);
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
                    curColor = square.style.backgroundColor.substring(4, square.style.backgroundColor.length-1);

                    curColor = curColor.split(", ").map(color => {
                        color = +color-(256/10)
                        if(color <= 0) {
                            color = 0;
                        } else if(color >= 255) {
                            color = 255;
                        };
                        return color;
                });

                    square.style.backgroundColor =  `rgb(${curColor[0]}, ${curColor[1]}, ${curColor[2]})`;

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
    rainbowToggle = false;
    if (shadingToggle == false) {
        shadingToggle = true;
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







