console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"

//Function to change the turn
const changeTurn = () =>{
   return turn === "X"  ?"0" : "X"
}

//Function to check for a win

const checkWin = () =>{

}

// Main game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = document.querySelector('.boxtext');
    boxtext.addEventListener('click',()=>){
        if(e.innerText === ''){
            e.innerText = turn;
            changeTurn();
        }
    }
})

