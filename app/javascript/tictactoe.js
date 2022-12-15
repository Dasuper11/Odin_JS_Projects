
const gameBoard = (() => {
  const buttons = document.querySelectorAll("div#container > button")
  const gameTitle = document.querySelector("div#game > h1")
  let board = [0,0,0,0,0,0,0,0,0];
  let turn = 1;

  const newBoard = (buttons) => {
    buttons.forEach(btn => {
      btn.innerHTML = ".";
      btn.addEventListener("click", playTurn)
    })

    turn = 1;
    board = [0,0,0,0,0,0,0,0,0];
  };

  const winConditions = () => {
    if(Math.abs(board[0] + board[1] + board[2]) == 3 ||
      Math.abs(board[3] + board[4] + board[5]) == 3 ||
      Math.abs(board[6] + board[7] + board[8]) == 3 ||
      Math.abs(board[0] + board[3] + board[6]) == 3 ||
      Math.abs(board[1] + board[4] + board[7]) == 3 ||
      Math.abs(board[2] + board[5] + board[8]) == 3 ||
      Math.abs(board[0] + board[4] + board[8]) == 3 ||
      Math.abs(board[2] + board[4] + board[6]) == 3
    ){
      return true;
    } else{
      return false;
    }
  }

  const winnerCheck = () => {
    if (winConditions()){
      gameTitle.innerHTML = "Player " + turn + " Wins!"
      buttons.forEach(btn =>{
        if (btn.innerHTML == "."){
          btn.removeEventListener("click", playTurn)
        }
      })
    }
    turn = turn * -1
  }

  const playTurn = (e) => {
    const btn = e.target
    const tile = btn.id[3];
    console.log(tile)
    board[tile] = turn;
    
    if (turn == 1){
      btn.innerHTML = "X"
    } else{
      btn.innerHTML = "O"
    }

    btn.removeEventListener("click", playTurn)
    winnerCheck()
  }

  const boardState = () => {
    console.log(board);
  }

  newBoard(buttons)
  gameTitle.addEventListener("hover", newBoard(buttons))
return {newBoard, playTurn, buttons, boardState};
})();

