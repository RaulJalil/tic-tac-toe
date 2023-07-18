let boxes = document.querySelectorAll('#box');
let result = document.querySelector('#result'); 

let color='red';
let gameOver = false;
let clickCount = 0;

for(let i=0; i<boxes.length; i++) {
    let box = boxes[i];
    box.onclick=function() {
        if(!box.clicked && !gameOver){
            box.clicked=true;
            box.style.backgroundColor = color;
            clickCount++
            let winner = getWinner(boxes, color);

            if (winner)
 {
                gameOver = true;
                result.innerHTML = `Game over. The winner is ${winner}!`;
            }

            if (clickCount === 9 && !winner) {
                gameOver = true;
                result.innerHTML = 'Game over. Tie!';
            }

            if (color === 'red') {
                color = 'green';
            } else {
                color = 'red';
            }

            // This code is the one-liner that does the if else statement above.
            // color = color === 'red' ? 'green' : 'red'; 
        }
    }
}

function getWinner(boxes, color) {
    let indices = [
        // columns
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        // rows
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // diagonals
        [0,4,8],
        [6,4,2],
    ];

    for(let i=0; i<indices.length; i++ ) {

    if(boxes[indices[i][0]].style.backgroundColor === color && 
        boxes[indices[i][1]].style.backgroundColor === color && 
        boxes[indices[i][2]].style.backgroundColor === color) {
        return color;
    }
}
}