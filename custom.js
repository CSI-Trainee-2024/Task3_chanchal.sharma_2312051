let bullets = 5;
let score = 0;
let missedShots = 0;

document.addEventListener("DOMContentLoaded", function () {
    const bulletDisplay = document.getElementById("currentBullets");
    const scoreDisplay = document.getElementById("currentScore");
    const fireSound = document.getElementById("fire");

    bulletDisplay.textContent = bullets;
    scoreDisplay.textContent = score;

    document.body.addEventListener("click", function (e) {
        if (bullets > 0) {
            bullets--; 
            bulletDisplay.textContent = bullets;

            if (e.target.tagName === "IMG") {
                fireSound.play();
                e.target.style.display = 'none';
                scoreDisplay.textContent = ++score;

                
                localStorage.setItem('shotBirds', score);
            } else {
                
                missedShots++;
                localStorage.setItem('missedShots', missedShots);
            }
            if (bullets === 0) {
                gameOver();
            }
        }
    });
});


function gameOver() {
    alert('Game Over! You have no more bullets.');
    window.location.href = 'gameover.html';
}


window.addEventListener("load", function () {
    if (!localStorage.getItem('shotBirds')) {
        localStorage.setItem('shotBirds', 0);
    }
    if (!localStorage.getItem('missedShots')) {
        localStorage.setItem('missedShots', 0);
    }
});















