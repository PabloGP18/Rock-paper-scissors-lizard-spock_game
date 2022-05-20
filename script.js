let countComputer = 0;
let countPlayer =  0;
let movesLeft = 5;

// Dom selection of all buttons with class option
const option = document.querySelectorAll(".option")
// Function for every time you click on one of the buttons
option.forEach((option) => {
    option.addEventListener("click",function (){
    const playerInput = this.textContent; // this makes a string of your clicked button//
    // array of options for the computer
    const aiOptions = ["Rock","Paper","Scissors","Lizard","Spock"];
    // random choosing one of the options in the array
    const aiInput = aiOptions[Math.floor(Math.random()*5)];
    // Calling functions in eventlistener

        comparingInput(playerInput,aiInput);
        leftToPlay(movesLeft);
        displayPick(playerInput,aiInput);
        checkWinner(countPlayer,countComputer,movesLeft)
        displayNone()
    });

});

document.getElementById("reset").addEventListener("click", restart)
function restart(){
     countComputer = 0;
    countPlayer =  0;
     movesLeft = 5;
    document.getElementById("pCount").innerText = countPlayer;
    document.getElementById("cCount").innerText= countComputer;
    document.getElementById("mvleft").innerText= "Moves left: " + movesLeft;
    document.getElementById("showResult").innerText= " ";
    console.log(countComputer, countPlayer)
}

function displayPick(playerInput,aiInput){
    document.getElementById("playerPick").textContent= playerInput;
    document.getElementById("computerPick").textContent= aiInput;
}
function leftToPlay(){
    if (movesLeft === 0){
        document.getElementById("mvleft").innerText= "No more moves left..Restart the game!";
    }
}

function comparingInput(playerInput, aiInput) {

    if(movesLeft < 1) return
    movesLeft--
    document.getElementById("mvleft").innerText = "Moves left: " + movesLeft;


    //if statement for a tie
    if (playerInput === aiInput) {
        document.getElementById("showResult").innerText = "Tie"
    }
    // checking rock
    else if (playerInput === "Rock") {

        if (aiInput === "Scissors" || aiInput === "lizard") {
            countPlayer++
            document.getElementById("showResult").innerText = "Player wins round!";
            document.getElementById("pCount").innerText = countPlayer;
        } else {
            countComputer++
            document.getElementById("showResult").innerText = "Computer wins round!";
            document.getElementById("cCount").innerText = countComputer;
        }
    }

    // checking paper
    else if (playerInput === "Paper") {

        if (aiInput === "Rock" || aiInput === "Spock") {
            countPlayer++
            document.getElementById("showResult").innerText = "Player wins round!";
            document.getElementById("pCount").innerText = countPlayer;
        } else {
            countComputer++
            document.getElementById("showResult").innerText = "Computer wins round!";
            document.getElementById("cCount").innerText = countComputer;
        }
    }

    // checking Scissors
    else if (playerInput === "Scissors") {

        if (aiInput === "Paper" || aiInput === "Lizard") {
            countPlayer++
            document.getElementById("showResult").innerText = "Player wins round!";
            document.getElementById("pCount").innerText = countPlayer;
        } else {
            countComputer++
            document.getElementById("showResult").innerText = "Computer wins round!";
            document.getElementById("cCount").innerText = countComputer;
        }
    }

    // checking Lizard
    else if (playerInput === "Lizard") {

        if (aiInput === "Spock" || aiInput === "Paper") {
            countPlayer++
            document.getElementById("showResult").innerText = "Player wins round!";
            document.getElementById("pCount").innerText = countPlayer;
        } else {
            countComputer++
            document.getElementById("showResult").innerText = "Computer wins round!";
            document.getElementById("cCount").innerText = countComputer;
        }
    }

    // checking Spock
    else if (playerInput === "Spock") {

        if (aiInput === "Scissors" || aiInput === "Rock") {
            countPlayer++
            document.getElementById("showResult").innerText = "Player wins round!";
            document.getElementById("pCount").innerText = countPlayer;
        } else {
            countComputer++
            document.getElementById("showResult").innerText = "Computer wins round!";
            document.getElementById("cCount").innerText = countComputer;
        }
        }
    console.log(countComputer, countPlayer)

}
function checkWinner(countPlayer,countComputer,movesLeft){
    if (movesLeft=== 0 && countPlayer>countComputer){
        document.getElementById("showResult").innerText= "Player wins game!";
    }
    else if(movesLeft === 0 && countPlayer<countComputer) {
        document.getElementById("showResult").innerText = "Computer wins game!";
        }
    }
function displayNone(){
    if(movesLeft > 0){
        document.getElementById("playerPick").style.display = "block";
        document.getElementById("computerPick").style.display= "block";
    }else{
        document.getElementById("playerPick").style.display = "none";
        document.getElementById("computerPick").style.display= "none";
    }
}
