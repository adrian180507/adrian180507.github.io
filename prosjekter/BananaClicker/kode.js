
// HTML-elementene
const banan = document.getElementById("banan");
const scoreDisplay = document.getElementById("score");
const upgradeclicks = document.getElementById("upgradeclicks")
const autoclickerButton = document.getElementById("bananafactory")
const infoDisplay = document.getElementById("infoDisplay")

 
// variabel for poengsummen
let score = 0;
let poengperclick = 1;
let autoClicker = false;
let clickerupgrade = 100

function updateScoreDisplay() {
    document.getElementById("score").innerText = score;

}


// klikkhendelse på cookien
banan.addEventListener("click", () => {
    score += poengperclick; // Øker poengsummen
    scoreDisplay.textContent = score; // Oppdaterer scoren
});





// oppgradere hvor mange bananer du får per click
upgradeclicks.addEventListener("click", () => {
    if (score >= clickerupgrade) {
        score -= clickerupgrade; // hvor mange poeng opgraderingen koster
        poengperclick++; // Økt mengde poeng per klikk
        infoDisplay.textContent = `Poeng per klikk: ${poengperclick}`;
        updateScoreDisplay();
    } else {
        alert("du har ikke nok bananer");
    }
});






// produserer bananer for deg
autoclickerButton.addEventListener("click", () => {
    if (score >= 5 && !autoClicker) {
        score -= 5; // Bruk 5000 poeng for å kjøpe bananafactory
        autoClicker = true; // Aktiverer bananafactory
        infoDisplay.textContent = "banan factory aktivert";
        updateScoreDisplay();

        // Gi 1 banan per sekund
        setInterval(() => {
            score++;
            updateScoreDisplay();
        }, 1000);
    } else if (autoClicker) {
        
        alert("Du har ikke nok poeng for denne oppgraderingen!");
    }
    else{  
        alert("du har allerede en bananfactory");
    }
});








