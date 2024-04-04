document.onkeydown = detectKey;
let droneBox = document.getElementById('drone-box')
function detectKey(e) {
    let posLeft = document.getElementById('drone-box').offsetLeft;
    let posTop = document.getElementById('drone-box').offsetTop;
    if (e.keyCode == '38') {
        droneBox.style.marginTop  = (posTop-50)+"px";
    }
    else if (e.keyCode == '40') {
        droneBox.style.marginTop  = (posTop+50)+"px";
    }
    else if (e.keyCode == '37') {
       droneBox.style.marginLeft  = (posLeft-50)+"px";
    }
    else if (e.keyCode == '39') {
       droneBox.style.marginLeft  = (posLeft+50)+"px";
    }
}
