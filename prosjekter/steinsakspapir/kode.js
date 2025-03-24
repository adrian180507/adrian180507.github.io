
let playerScore = 0;
let computerScore = 0;
let Uavgjortscore = 0;

function playGame(playerChoice) {
    const choices = ['stein', 'saks', 'papir'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    let resultElement = document.getElementById("result");

    
    resultElement.classList.remove("win", "lose", "tie");

    if (playerChoice === computerChoice) {
        result = "ingenvant!";
        Uavgjortscore++;
        resultElement.classList.add("tie");
        
        
    } else if (
        (playerChoice === 'stein' && computerChoice === 'saks') ||
        (playerChoice === 'saks' && computerChoice === 'papir') ||
        (playerChoice === 'papir' && computerChoice === 'stein')
    ) {
        result = "Du vinner!";
        playerScore++;
        resultElement.classList.add("win");
    } else {
        result = "Maskinen vinner!";
        computerScore++;
        resultElement.classList.add("lose");
    }
    

    resultElement.innerText = `Du valgte ${playerChoice}, maskinen valgte ${computerChoice}. ${result}`;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("Uavgjortscore").innerText = Uavgjortscore;
}


// knapp for å gå tilbake til hovedmenyen
const Tilbake = document.getElementById("Tilbake");
Tilbake.addEventListener("click", () => {
    window.location.href = "../prosjekt.html";
});