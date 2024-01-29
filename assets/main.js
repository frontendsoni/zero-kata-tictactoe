// Accessing the elements

let winText = document.querySelector('.winner_box');
const boxes = document.querySelectorAll('.tile');
const newGame = document.getElementById('reset_btn');

// Array of winners

const winPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Initialisation of player

let playerO = true;

// Itirate over the tiles and assign text

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (!box.classList.contains('clicked')) {
      if (playerO) {
        box.innerText = 'O';
        playerO = false;
      } else {
        box.innerText = 'X';
        playerO = true;
      }
      box.classList.add('clicked');
      checkWinner();
    }
  });
});

newGame.addEventListener('click', () => {
  enableAll();
})


let enableAll = () => {
  boxes.forEach((box) => {
    if (box.classList.contains('clicked')) {
      box.classList.remove('clicked');
      box.innerText = '';
      winText.innerText = '';
    }
  });
}
let disableAll = () => {
  boxes.forEach((box) => {
    if (!box.classList.contains('clicked')) {
      box.classList.add('clicked');
    }
  });
}

let showWinner = (winner) => {
  winText.innerText = `Congratulations The Winner Is ${winner} `;
  disableAll();
}

const checkWinner = () => {
  for(let pattern of winPattern) {
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;

     if (pos1 != '' && pos2 != '' && pos3 != '') {
      if(pos1 == pos2 & pos2 == pos3) {
          console.log('winner is'+ ' ' + pos1);
          showWinner(pos1);
      }
     }
  }
}