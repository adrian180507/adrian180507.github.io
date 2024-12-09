
// HTML-elementene
const banan = document.getElementById("banan");
const scoreDisplay = document.getElementById("score");

// variabel for poengsummen
let score = 0;

// klikkhendelse på cookien
banan.addEventListener("click", () => {
    score++; // Øker poengsummen med 1
    scoreDisplay.textContent = score; // Oppdaterer scoren
});











