let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
] // an array of colors to start with

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message');

colorDisplay.textContent = pickedColor;

for(let i=0; i < squares.length; i++) {
    // assign colors to each squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
    // grab color of clicked square
    let clickedColor = this.style.backgroundColor
    // compare to pickedColor using if/else
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#dfe6e9";
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
