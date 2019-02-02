var rotate = false;
var translate = false;

function myRotate(deg1, deg2) {
    if (rotate === false) {
        document.getElementById('clock').style.transform = "rotate("+deg1+")";
        rotate = true;
    } else if (rotate === true) {
        document.getElementById('clock').style.transform = "rotate("+deg2+")";
        rotate = false;
    }

}

function myTranslate() {
    if (translate === false) {
        document.getElementById('testanim').style.transform = "translate(900)";
        translate = true;
    } else if (translate === true) {
        document.getElementById('testanim').style.transform = "translate(1400)";
        translate = false;
    }
}

function myScroll(y) {
    var elem = document.getElementsByClassName('content')[0];
    elem.scrollTo({
        left: 0,
        top: y,
        behavior: "smooth"
    } );
}


