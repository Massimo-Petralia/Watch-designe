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

var elem1 = document.getElementById('titolo1');
var elem2 = document.getElementById('titolo2');
var elem3 = document.getElementById('titolo3');
var elem3 = document.getElementById('titolo4');
var elem3 = document.getElementById('titolo5');


function myFunction1() {
    var elem1 = document.getElementById('titolo1');
    elem1.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'}); 
}
function myFunction2() {
    var elem2 = document.getElementById('titolo2');
    elem2.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'}); 
}
function myFunction3() {
    var elem3 = document.getElementById('titolo3');
    elem3.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'}); 
}
