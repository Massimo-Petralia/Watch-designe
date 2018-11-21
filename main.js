var rotate = false;

function myRotate_1() {
    if (rotate === false) {
        document.getElementById('clock').style.transform = "rotate(-20deg)";
        rotate = true;
    } else if (rotate === true) {
        document.getElementById('clock').style.transform = "rotate(-40deg)";
        rotate = false;
    }
}

function myRotate_2() {
    if (rotate === false) {
        document.getElementById('clock').style.transform = "rotate(0deg)";
        rotate = true;
    } else if (rotate === true) {
        document.getElementById('clock').style.transform = "rotate(-40deg)";
        rotate = false;
    }
}

function myRotate_3() {
    if (rotate === false) {
        document.getElementById('clock').style.transform = "rotate(20deg)";
        rotate = true;
    } else if (rotate === true) {
        document.getElementById('clock').style.transform = "rotate(-40deg)";
        rotate = false;
    }
}

function myRotate_4() {
    if (rotate === false) {
        document.getElementById('clock').style.transform = "rotate(40deg)";
        rotate = true;
    } else if (rotate === true) {
        document.getElementById('clock').style.transform = "rotate(-40deg)";
        rotate = false;
    }
}