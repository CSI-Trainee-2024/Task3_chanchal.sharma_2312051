let bullets = 5;
let count = 0;
    
window.onclick = function(e){
    if(bullets >0){
        bullets--;
    document.getElementById("currentBullets").innerHTML = bullets;
    
    if(e.target.nodeName == "IMG"){
        e.target.style.display = 'none';
        document.getElementById("currentScore").innerHTML = ++count;
    }

}
}