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

const CLICKER_UPGRADE_COST = 100; // hvor mye det koster å oppgradere
const AUTOCLICKER_COST = 500

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
    if (score >= CLICKER_UPGRADE_COST) {
        score -= CLICKER_UPGRADE_COST; // hvor mange poeng opgraderingen koster
        poengperclick++; // Økt mengde poeng per klikk
        infoDisplay.textContent = `Poeng per klikk: ${poengperclick}`;
        updateScoreDisplay();
    } else {
        infoDisplay.textContent = "Du har ikke nok bananer";
    }
});






// produserer bananer for deg
autoclickerButton.addEventListener("click", () => {
    if (score >= AUTOCLICKER_COST && !autoClicker) {
        score -= AUTOCLICKER_COST; // Bruk 500 poeng for å kjøpe bananafactory
        autoClicker = true; // Aktiverer bananafactory
        infoDisplay.textContent = "Banan factory aktivert";
        updateScoreDisplay();

        // Gi 1 banan per sekund
        const autoClickerInterval = setInterval(() => {
            score += poengperclick;
            updateScoreDisplay();
        }, 1000);
    } else if (autoClicker) {
        infoDisplay.textContent = "du har ikke nok bananer";
    } else {
        infoDisplay.textContent = "Banan factory er allerede aktivert";
    }
});








