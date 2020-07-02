let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
] // an array of colors to start with

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById('colorDisplay')

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
        alert("correct");
        } else {
            alert("wrong");
        }
    });
}
