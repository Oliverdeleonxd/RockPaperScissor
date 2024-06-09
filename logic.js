
let scorePlayer = 0;
let scoreComputer = 0;

let options = ["Rock","Paper","Scissor"];
let optionsPickImages = [ '<div class="card" id="Rock" > <img src="src/stone.png" alt=""></div>',  
                    '<div class="card" id="Paper"><img src="src/file.png" alt=""></div>',
                    '<div class="card" id="Scissors"><img src="src/scissors.png" alt=""></div>'];

let cards = document.getElementsByClassName("cards");
let btnReset = document.getElementById("reset");

let play = document.getElementById("play");
let playerS = document.getElementById("scorePlayer");
let computerS = document.getElementById("scoreComputer");
let msg = document.getElementById("msg");

let playerPick = document.getElementById("playerPick");
let computePickHtml = document.getElementById("computerPick");

let playC = document.getElementsByClassName("play");

document.getElementById("play").addEventListener("click", (e)=>{
    play.style.display = "none";
    playC[0].style.display = "block";
    msg.innerText = "Choose your option"
    
});

document.getElementById("Rock").addEventListener("click", (e) =>{
    playerPick.innerHTML = '<div class="card" id="Rock" > <img src="src/stone.png" alt=""></div>';
    getRoundResult("Rock");
});
document.getElementById("Paper").addEventListener("click", (e) =>{
    playerPick.innerHTML = '<div class="card" id="Paper"><img src="src/file.png" alt=""></div>';
    getRoundResult("Paper");
});
document.getElementById("Scissors").addEventListener("click", (e) =>{
    playerPick.innerHTML = '<div class="card" id="Scissors"><img src="src/scissors.png" alt=""></div>'
    getRoundResult("Scissors");
}); 


btnReset.addEventListener("click", (e)=>{
    resetGame();
});

function comproResult() {

    if (scorePlayer === 3) {

        msg.innerText = "User win the game";
        cards[0].style.display = "none";
        console.log(`Player: ${scorePlayer} | Computer: ${scoreComputer}` );
        document.getElementById("reset").style.display = "flex";

    }else if(scoreComputer === 3) {
        msg.innerText = "Computer win the game";
        cards[0].style.display = "none";
        console.log(`Player: ${scorePlayer} | Computer: ${scoreComputer}` );

        document.getElementById("reset").style.display = "flex";
    }   

}

function getRandonComputer() {
    let pick = Math.floor(Math.random() * options.length);
    return options[pick];
}

function userWins(userPick,computerPick) {
    if (userPick === "Rock" && computerPick === "Scissor" ) {
        return true;
    }else if(userPick === "Paper" && computerPick === "Rock" ) {
        return true;
    }else if (userPick === "Scissor" && computerPick === "Paper" ){
        return true;
    }else{
        return false;
    }
}



 function getRoundResult(userPick){
    const computerPick = getRandonComputer();

    for (let index = 0; index < options.length; index++) {

        document.getElementsByClassName("cards")[0].style.display = "none";

        setTimeout(() => {
        computePickHtml.innerHTML = optionsPickImages[index];   

        }, index * 500); 
        setTimeout(() => { 

        let pick = options.indexOf(computerPick);
        computePickHtml.innerHTML = optionsPickImages[pick];  
        document.getElementsByClassName("cards")[0].style.display = "flex";
        comproResult();

        }, options.length * 500);
   
    }

        
        if (userWins(userPick,computerPick)) {
            scorePlayer++;
            playerS.innerText  = scorePlayer;
            msg.innerText = "User win";

        }else if (userPick === computerPick) {
            msg.innerText = "Tie";
        } else {
            scoreComputer++;
            computerS.innerText  = scoreComputer;
            msg.innerText = "Computer win";
            
        }
    
}






function resetGame() {
    
    scoreComputer = 0;
    playerS.innerText  = 0;
    scorePlayer = 0;
    computerS.innerText  = 0;

    btnReset.style.display = "none";
    cards[0].style.display = "flex";


}













