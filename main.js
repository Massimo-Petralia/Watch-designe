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

//FUNZIONI DI SCROLL DEI TITOLI ALL'INTERNO DEL BOX 'CONTENT'
function myFunction1() {
    var elem1 = document.getElementById('titolo1');
    var  topPos = elem1.offsetTop;

    var elemContainer = document.getElementsByClassName('content')[0];
    elemContainer.scrollTop = topPos;
}
function myFunction2() {
    var elem2 = document.getElementById('titolo2');
    var  topPos = elem2.offsetTop;

    var elemContainer = document.getElementsByClassName('content')[0];
    elemContainer.scrollTop = topPos;
}
function myFunction3() {
    var elem3 = document.getElementById('titolo3');
    var  topPos = elem3.offsetTop;

    var elemContainer = document.getElementsByClassName('content')[0];
    elemContainer.scrollTop = topPos;
}
function myFunction4() {
    var elem4 = document.getElementById('titolo4');
    var  topPos = elem4.offsetTop;

    var elemContainer = document.getElementsByClassName('content')[0];
    elemContainer.scrollTop = topPos;
}
function myFunction5() {
    var elem5 = document.getElementById('titolo5');
    var  topPos = elem5.offsetTop;

    var elemContainer = document.getElementsByClassName('content')[0];
    elemContainer.scrollTop = topPos; 
}


function myHeight() {
    var elem = document.getElementById('header');
    if (elem.style.height = '100px') {
        elem = document.getElementById('header').style.height = '20px';
    } 
   
    // funzione incompleta
}

