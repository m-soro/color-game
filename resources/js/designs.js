let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelector('.mode');

for(let i = 0; i < modeButtons.length; i ++ ) {
    modeButtons[i].addEventListener('click', function() {
        this.classList.add('selected');
    });
}

// easyBtn.addEventListener('click', function(){
//     hardBtn.classList.remove('selected');
//     easyBtn.classList.add('selected');
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     // hide the bottom three
//     for(let i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//           squares[i].style.backgroundColor = colors[i];
//       } else {
//         squares[i].style.display = "none";
//       }
//     }
// });
//
// hardBtn.addEventListener('click', function() {
//     easyBtn.classList.remove('selected');
//     hardBtn.classList.add('selected');
// });

resetButton.addEventListener("click", function() {
    // generate new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    messageDisplay.textContent= '';
    // loop through all squares to change colors
    for(let i=0; i < squares.length; i++) {
        // change each square to match the correct color.
        squares[i].style.backgroundColor = colors[i];
    h1.style.backgroundColor = "steelblue";
    }
});
colorDisplay.textContent = pickedColor;

for(let i=0; i < squares.length; i++) {
    // assign colors to each squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
    // grab color of clicked square
    let clickedColor = this.style.backgroundColor
    // compare to pickedColor using if/else
    console.log(clickedColor, pickedColor);

    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColors(color) {
    // loop through all squares to change colors
    for(let i=0; i < squares.length; i++) {
        // change each square to match the correct color.
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = []
    // repeat num times
    for(let i=0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor())
    }
    // return that array
    return arr;
}
function randomColor() {
    // pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 to 255
    let b = Math.floor(Math.random() * 256)
    // pick a "green" from 0 to 255
    let g = Math.floor(Math.random() * 256)
    // synthesize to look follow the string format of rbg code
    return `rgb(${r}, ${g}, ${b})`;
}
