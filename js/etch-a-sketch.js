let slider = document.querySelector('.slider');
let valueDisplay = document.querySelector('.value');


valueDisplay.textContent = `${slider.value} x ${slider.value}`;




// slider.addEventListener('input', updateArray(), false);

slider.addEventListener('input', () => 
valueDisplay.textContent = `${slider.value} x ${slider.value}`;
);

// function updateArray() {
//     valueDisplay.textContent = `${slider.value} x ${slider.value}`;

// }