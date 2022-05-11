function populateBoard(size) {
let pad = document.querySelector(".pad");
let squares = pad.querySelectorAll('div')
squares.forEach((div) => div.remove());
pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
pad.style.gridTemplateRows = `repeat(${size}, 1fr)`;


let amount = size * size;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor="black"} 
    );
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