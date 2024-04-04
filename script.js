document.onkeydown = detectKey;
let droneBox = document.getElementById('drone-box')
let droneWrapper = document.getElementById('wrapper')

function detectKey(e) {
    let posLeft = droneBox.offsetLeft;
    let posTop = droneBox.offsetTop;
    let bottom = droneBox.offsetParent.offsetHeight - posTop - droneBox.offsetHeight;
    let top = droneBox.offsetParent.offsetHeight - bottom - droneBox.offsetHeight
    let right = droneBox.offsetParent.offsetWidth  - posLeft - droneBox.offsetWidth - 50
    let left = droneBox.offsetParent.offsetWidth  - right - droneBox.offsetWidth - 100


    if (e.keyCode == '38'  ) {
        if(top > 0 && top < 50){
            droneBox.style.marginTop  = (posTop - top )+"px";
        }else if(top >= 50) {
            droneBox.style.marginTop  = (posTop-50)+"px";
        }
    }else if(e.keyCode == '40') {
        if(bottom < 50 && bottom > 0){
            droneBox.style.marginTop  = (posTop+bottom)+"px";
        }else if(bottom >= 50){
            droneBox.style.marginTop  = (posTop+50)+"px";
        }    
    }else if (e.keyCode == '37') {
        if(left > 0 && left < 50 ) {
            droneBox.style.marginLeft  = (posLeft-left)+"px";
        }else if(left >=50){
            droneBox.style.marginLeft  = (posLeft-50)+"px";
        }
    }
    else if (e.keyCode == '39') {
        if(right > 0 && right < 50 ) {
            droneBox.style.marginLeft  = (posLeft+right)+"px";
        }else if(right >= 50){
            droneBox.style.marginLeft  = (posLeft+50)+"px";
        }

    }
    console.log(right)
}
