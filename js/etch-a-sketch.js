let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');
let drawingContainer = document.querySelector('.drawing-container');


function createSquares(multiplyer) {
    let rowWidth = drawingContainer.clientWidth / multiplyer;
    
    for (let i = 0; i < multiplyer; i++) {
        let row = document.createElement('div');
        row.setAttribute('style', `display: flex; flex-direction: column; height: 100%; width: ${rowWidth}px`);
        drawingContainer.appendChild(row);
        let squareHeight = row.clientHeight / multiplyer;

        for (let i = 0; i < multiplyer; i++) {
            let square = document.createElement('div');
            square.setAttribute('style', `width: 100%; height: ${squareHeight}px; border: 1px; border-style: solid`);
            row.appendChild(square);
        }

    }
}

function removeSquares(parent) {
    while(drawingContainer.firstChild) {
        drawingContainer.removeChild(drawingContainer.lastChild);
    }
}

valueDisplay.textContent = `${slider.value} x ${slider.value}`;
createSquares(slider.value);


slider.addEventListener('input', () => {
valueDisplay.textContent = `${slider.value} x ${slider.value}`;
removeSquares(drawingContainer);
createSquares(slider.value);
});
