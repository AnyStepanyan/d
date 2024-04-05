function detectKey(e) {

    const droneBox = document.getElementById('drone-box')
    const droneWrapper = document.getElementById('wrapper')
    const wingWidth = document.getElementById('left-wing').offsetWidth

    const posLeft = droneBox.offsetLeft;
    const posTop = droneBox.offsetTop;
    const bottom = droneBox.offsetParent.offsetHeight - posTop - droneBox.offsetHeight;
    const top = droneBox.offsetParent.offsetHeight - bottom - droneBox.offsetHeight
    const right = droneBox.offsetParent.offsetWidth - posLeft - droneBox.offsetWidth - wingWidth / 2
    const left = droneBox.offsetParent.offsetWidth - right - droneBox.offsetWidth - wingWidth


    if (e.keyCode == '38') {
        if (top > 0 && top < 50) {
            droneBox.style.marginTop = (posTop - top) + "px";
        } else if (top >= 50) {
            droneBox.style.marginTop = (posTop - 50) + "px";
        }
    } else if (e.keyCode == '40') {
        if (bottom < 50 && bottom > 0) {
            droneBox.style.marginTop = (posTop + bottom) + "px";
        } else if (bottom >= 50) {
            droneBox.style.marginTop = (posTop + 50) + "px";
        }
    } else if (e.keyCode == '37') {
        if (left > 0 && left < 50) {
            droneBox.style.marginLeft = (posLeft - left) + "px";
        } else if (left >= 50) {
            droneBox.style.marginLeft = (posLeft - 50) + "px";
        }
    }
    else if (e.keyCode == '39') {
        if (right > 0 && right < 50) {
            droneBox.style.marginLeft = (posLeft + right) + "px";
        } else if (right >= 50) {
            droneBox.style.marginLeft = (posLeft + 50) + "px";
        }
    }
}

document.onkeydown = detectKey;

