let countComputer = 0;
let countPlayer =  0;
let movesLeft = 10;

// Dom sellection of all buttons with class option
const option = document.querySelectorAll(".option")
// Function for every time you click on one of the buttons
option.forEach((option) => {
    option.addEventListener("click",function (){
    const playerInput = this.textContent; // this makes a string of your clicked button//
        console.log(playerInput);
    // array of options for the computer
    const aiOptions = ["Rock","Paper","Scissors","Lizard","Spock"];
    // random choosing one of the options in the array
    const aiInput = aiOptions[Math.floor(Math.random()*5)];
        console.log(aiInput)
    // Calling functions in eventlistener
        comparingInput(playerInput,aiInput);
        leftToPlay();
    });
});

function leftToPlay(){
    if (movesLeft <= 0){
        movesLeft = "No more moves left..Restart the game!";
        document.getElementById("mvleft").innerText= movesLeft;
    }
}

function comparingInput(playerInput, aiInput) {
    movesLeft--
    document.getElementById("mvleft").innerText= "Moves left: " + movesLeft;

    //if statement for a tie
    if (playerInput === aiInput){
        countPlayer++
        countComputer++
        document.getElementById("pCount").innerText = countPlayer;
        document.getElementById("cCount").innerText= countComputer;
        document.getElementById("showResult").innerText= "Tie"
    }
    // checking rock
    if(playerInput === "Rock"){

        if(aiInput === "Scissors" || aiInput === "lizard"){
            countPlayer++
            document.getElementById("showResult").innerText= "Player wins!";
            document.getElementById("pCount").innerText = countPlayer;
        }else{
            countComputer++
            document.getElementById("showResult").innerText= "Computer wins!";
            document.getElementById("cCount").innerText= countComputer;
        }
    }

    // checking paper
    if(playerInput === "Paper"){

        if(aiInput === "Rock" || aiInput === "Spock"){
            countPlayer++
            document.getElementById("showResult").innerText= "Player wins!";
            document.getElementById("pCount").innerText = countPlayer;
        }else{
            countComputer++
            document.getElementById("showResult").innerText= "Computer wins!";
            document.getElementById("cCount").innerText= countComputer;
        }
    }

    // checking Scissors
    if(playerInput === "Scissors"){

        if(aiInput === "Paper" || aiInput === "Lizard"){
            countPlayer++
            document.getElementById("showResult").innerText= "Player wins!";
            document.getElementById("pCount").innerText = countPlayer;
        }else{
            countComputer++
            document.getElementById("showResult").innerText= "Computer wins!";
            document.getElementById("cCount").innerText= countComputer;
        }
    }

    // checking Lizard
    if(playerInput === "Lizard"){

        if(aiInput === "Spock" || aiInput === "Paper"){
            countPlayer++
            document.getElementById("showResult").innerText= "Player wins!";
            document.getElementById("pCount").innerText = countPlayer;
        }else{
            countComputer++
            document.getElementById("showResult").innerText= "Computer wins!";
            document.getElementById("cCount").innerText= countComputer;
        }
    }

    // checking Spock
    if(playerInput === "Spock"){

        if(aiInput === "Scissors" || aiInput === "Rock"){
            countPlayer++
            document.getElementById("showResult").innerText= "Player wins!";
            document.getElementById("pCount").innerText = countPlayer;
        }else{
            countComputer++
            document.getElementById("showResult").innerText= "Computer wins!";
            document.getElementById("cCount").innerText= countComputer;
        }
    }
}
