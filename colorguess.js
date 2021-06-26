var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //Mode buttons event listeners
    setupModeButtons();
    //Square Listeners
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "EASY") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //Add click listeners to squares
        squares[i].addEventListener("click", function() {
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            //Compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT!";
                resetButton.textContent = "PLAY AGAIN?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TRY AGAIN!";
            }
        });
    }
}

function reset() {
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    //Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

/* easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
}) */

/* hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
}) */

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    //Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Add "num" random colors to array(repeat "num" times)
    for (var i = 0; i < num; i++) {
        //Get random color and push into array
        arr.push(randomColor());
    }
    //Return that array
    return arr;
}

function randomColor() {
    //Pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}