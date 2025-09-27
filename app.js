
let board = ["","","","","","","","",""];
let comp = [];
let gameOver= false;

let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let h3 = document.querySelector("h3");

let reset = document.querySelector(".reset");

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", userMove);
}

function userMove(){
    if(gameOver){
        return;
}
    let btn = this;
    h3.innerText = "Game started";

    let ind = btn.getAttribute("id"); 
    ind = parseInt(ind);              

    if(board[ind] == ""){
        board[ind] = "x";     
        btn.innerText = "x";  
    }

    console.log("user score", board);
    checkWinner();

    if(!gameOver){
        available(); 
    
    }
}
function available(){
    comp = [];
    for(let i = 0; i < board.length; i++){
        if(board[i] == ""){
            comp.push(i); 
        }
    }
    console.log("available slots", comp);

    if(comp.length== 0){
        checkWinner();
    }
    else{ computerMove();
}
}

function computerMove(){
    
    let rand = Math.floor(Math.random() * comp.length);
    let ind = comp[rand]; 
    board[ind] = "O";  
    let btn = document.getElementById(ind);
    setTimeout(function () {
        btn.innerText = "o"; 

    console.log("computer", board);
    
    checkWinner();
    },600) 
}

function checkWinner(){
    for (let pattern of winner){
        let [a, b, c] = pattern;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            if(board[a].match("x")) {
            h3.innerHTML = `Hurry you Win! &#9996; `;
        }
            else{
                h3.innerHTML=`You lose &#128546;`;
            }
            gameOver = true;
            return;
        }
    }

    if(!board.includes("")){
        h3.innerText = "Draw!";
        gameOver = true;
    }
}


reset.addEventListener("click",function (){
    board = ["","","","","","","","",""];
    comp = [];
    gameOver = false;
    for (let btn of allBtns){
        btn.innerText = "";
    }

    h3.innerText = "New Game!";
}
)