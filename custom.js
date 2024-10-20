let bullets = 5; 
let score = 0;

document.addEventListener("DOMContentLoaded", function() {
    const bulletDisplay = document.getElementById("currentBullets");
    const scoreDisplay = document.getElementById("currentScore");
    const fireSound = document.getElementById("fire");

    bulletDisplay.textContent = bullets;
    scoreDisplay.textContent = score;

    document.body.addEventListener("click", function(e) {
        if (bullets > 0 && e.target.tagName === "IMG") {
            bullets--;
            bulletDisplay.textContent = bullets;

            fireSound.play();
            e.target.style.display = 'none';
            scoreDisplay.textContent = ++score;
        }
    });
});
