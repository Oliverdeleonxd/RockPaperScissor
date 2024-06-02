
let scorePlayer = 0;
let scoreComputer = 0;

let options = ["Rock","Paper","Scissor"];
let optionsPick = [ '<div class="card" id="Rock" > <img src="src/stone.png" alt=""></div>',  
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
    // playerS.innerText = scorePlayer ++; 
    playerPick.innerHTML = '<div class="card" id="Rock" > <img src="src/stone.png" alt=""></div>';
    getRoundResult("Rock");
});
document.getElementById("Paper").addEventListener("click", (e) =>{
    // playerS.innerText = scorePlayer ++; 
    playerPick.innerHTML = '<div class="card" id="Paper"><img src="src/file.png" alt=""></div>';
    getRoundResult("Paper");
});
document.getElementById("Scissors").addEventListener("click", (e) =>{
    // playerS.innerText = scorePlayer ++; 
    playerPick.innerHTML = '<div class="card" id="Scissors"><img src="src/scissors.png" alt=""></div>'
    getRoundResult("Scissors");
}); 


btnReset.addEventListener("click", (e)=>{
    reset();
});

function comproResult() {

    // getRoundResult(pick);

    if (scorePlayer === 3) {
       // reset();
        msg.innerText = "User win the game";
        cards[0].style.display = "none";
        console.log(`Player: ${scorePlayer} | Computer: ${scoreComputer}` );
        //play.style.display = "block";
        document.getElementById("reset").style.display = "flex";

    }else if(scoreComputer === 3) {
        //reset();
        msg.innerText = "Computer win the game";
        cards[0].style.display = "none";
        console.log(`Player: ${scorePlayer} | Computer: ${scoreComputer}` );
        // play.style.display = "block";

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
       // const element = array[index];
       setTimeout(() => {
         computePickHtml.innerHTML = optionsPick[index];   
        console.log(options[index]);
    }, index * 500); 
    setTimeout(() => { 
        //  console.log( "holaa" );
         let pick = options.indexOf(computerPick);
        computePickHtml.innerHTML = optionsPick[pick];  
        document.getElementsByClassName("cards")[0].style.display = "flex";
        comproResult();
    }, options.length * 500);
    //setTimeout( 3000);
    
   
    
    }     
    console.log("Computer pick: "+computerPick);
    
    // console.log( "holaa" + options.indexOf(computerPick));
    // {
       
    //     setInterval(() => {
    //         // computePickHtml.innerHTML = iterator;
    //         console.log(iterator);
    //     }, 5000);
 
    // }



    console.log("User pick: "+userPick);
   
    
        
        if (userWins(userPick,computerPick)) {
            scorePlayer++;
            playerS.innerText  = scorePlayer;
            // console.log("User win");
            msg.innerText = "User win";

        }else if (userPick === computerPick) {
            // console.log("Empate")
            msg.innerText = "Tie";
        } else {
            scoreComputer++;
            computerS.innerText  = scoreComputer;
            // console.log("Computer wins")
            msg.innerText = "Computer win";
            
        }

        


    
}





function reset() {
    
    scoreComputer = 0;
    playerS.innerText  = 0;
    scorePlayer = 0;
    computerS.innerText  = 0;

    btnReset.style.display = "none";
    cards[0].style.display = "flex";


}


// await sleep(<duration>)













