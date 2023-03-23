let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');
let grid = document.querySelector('.grid');
let black = document.querySelector('.black');
let color = document.querySelector('.color');
let colorSelection = document.querySelector('.colorSelector');
let shading = document.querySelector('.shading');
let lighten = document.querySelector('.lighten');
let rainbow = document.querySelector('.rainbow');
let border = document.querySelector('.border');
let eraser = document.querySelector('.eraser');
let clear = document.querySelector('.clear');

let mouseDown = false;
let currentColor = 'rgb(0, 0, 0)';
let mode = 'black';
let shade = 0;

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

function colorSquares (e) {
    if (e.type === 'mouseover' && !mouseDown) return;

    if(mode == 'shading' || mode =='lighten') {
        curColor = e.target.style.backgroundColor.substring(4, e.target.style.backgroundColor.length-1).split(", ").map(color => {
            color = +color+(shade)
            if(color <= 0) {
                color = 0;
            } else if(color >= 255) {
                color = 255;
            };
            return color;
        });
        e.target.style.backgroundColor =  `rgb(${curColor[0]}, ${curColor[1]}, ${curColor[2]})`;

    }else if(mode == 'rainbow') {
        var r = (Math.random() * 255);
        var g = (Math.random() * 255);
        var b = (Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }else if(mode == 'black'){
        e.target.style.backgroundColor = currentColor;
    }else if(mode == 'color'){
        e.target.style.backgroundColor = colorSelection.value;
    }else if(mode == 'eraser') {
        e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    };
}

function syncSquares () {
    squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', e => colorSquares(e));
        square.addEventListener('mousedown', e => colorSquares(e));
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
    mode = 'black';
    currentColor = '#000000';
})

color.addEventListener('click', () => {
    mode = 'color';
})

colorSelection.addEventListener('input', () => {
    mode = 'color';
})

shading.addEventListener('click', () => {
    mode = 'shading';
    shade = (-256/10)
})

lighten.addEventListener('click', () => {
    mode = 'lighten';
    shade = (+256/10)
})

rainbow.addEventListener('click', () => {
    mode = 'rainbow';
})

border.addEventListener('click', () => {
    squares.forEach(square => {
        square.classList.toggle('no-border');
    });
})

eraser.addEventListener('click', () => {
    mode = 'eraser';
})

clear.addEventListener('click', () => {
    removeSquares(grid);
    createSquares(slider.value);
    syncSquares();
})







