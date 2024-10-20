let bullets = 5;
let count = 0;

function shoot(bird){
    

    if(bullets >=0){
    bird.style.display = 'none';
    document.getElementById("currentScore").innerHTML = ++count;
    document.getElementById("currentBullets").innerHTML = bullets;
}
}

window.onclick = function(){
    bullets--;
}