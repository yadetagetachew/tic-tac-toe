let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));
let playerdisplay = document.querySelector('.display');

const fullArray = 9

const O_LETTER = "O"
const X_LETTER = "X"

let currentPlayer = X_LETTER
let spaces = Array(9).fill(null)

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', boxClicked))
}
const gameOver = () => {
  boxes.forEach(box => box.removeEventListener('click', boxClicked, {once: true}))
}



function boxClicked(e) {
   id = e.target.id
  
  if (!spaces[id]){
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    // const image = document.createElement('img');
    // image.src = X_LETTER;
    // image.appendChild(image)
    if(playerWon() !== false){
      playerdisplay.innerText = `${currentPlayer} has won!`
      let winningLine = playerWon()
      gameOver()
      console.log(winningLine)
    }else{
      playerdisplay.innerText = "Awaiting a Winner!"
    }

    currentPlayer = currentPlayer == X_LETTER ? O_LETTER: X_LETTER
  }
  
}

const winningConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


function playerWon(){
  for (const combination of winningConditions){
    let [a, b, c] = combination

    if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
      return combination
    }
  }
  return false 
}
  
restartBtn.addEventListener('click', restart)

function restart(){
  spaces.fill(null)
  playerdisplay.innerText = 'Player X Start'

  boxes.forEach(box => {
    box.innerText = ''
  })
  startGame()
  currentPlayer = X_LETTER
}

startGame()