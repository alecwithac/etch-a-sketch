let color = "black";
let click = true;

function populateBoard(size) {
let pad = document.querySelector(".pad");
let squares = pad.querySelectorAll('div')
squares.forEach((div) => div.remove());
pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
pad.style.gridTemplateRows = `repeat(${size}, 1fr)`;


let amount = size * size;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = "white";
    pad.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if(input >=2 && input <=100) {
    populateBoard(input);
  } else {
      console.log("Incorrect number of squares");
  
    populateBoard(input);
  }
}

/* function for global backgroud color passed with function */
function colorSquare() {
  if(click) {
  if(color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}
}

/* Add this function to different buttons for a color of choice */
function changeColor(choice) {
  color = choice;
}

/* reset the board to white without removing the actual divs */
function resetPad() {
  let pad = document.querySelector(".pad");
  let squares = pad.querySelectorAll('div')
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
  

/*click to draw on sketch pad*/ 
document.querySelector("body").addEventListener('click', (e) => {
 if(e.target.tagName != "BUTTON") {
  click = !click;
  if(click) {
    document.querySelector('.mode').textContent = "Pen: Active"
  } else {
    document.querySelector('.mode').textContent = "Pen: Not active"
 }
  }
}); 
