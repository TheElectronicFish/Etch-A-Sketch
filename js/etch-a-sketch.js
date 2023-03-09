let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');
let grid = document.querySelector('.grid');


function createSquares(multiplyer) {
    let rowWidth = grid.clientWidth / multiplyer;
    
    for (let i = 0; i < multiplyer; i++) {
        let row = document.createElement('div');
        row.setAttribute('style', `display: flex; flex-direction: column; height: 100%; width: ${rowWidth}px`);
        grid.appendChild(row);
        let squareHeight = row.clientHeight / multiplyer;

        for (let i = 0; i < multiplyer; i++) {
            let square = document.createElement('div');
            square.setAttribute('style', `width: 100%; height: ${squareHeight}px; border: 1px; border-style: solid; background-color: white`);
            row.appendChild(square);
        }

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

valueDisplay.textContent = `${slider.value} x ${slider.value}`;
createSquares(slider.value);


slider.addEventListener('input', () => {
    valueDisplay.textContent = `${slider.value} x ${slider.value}`;
});

slider.addEventListener('mouseup', () => {
    removeSquares(grid);
    createSquares(slider.value);
});
