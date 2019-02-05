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
function myTranslate(translate1, translate2) {
    if (translate === false) {
        document.getElementById('testanim').style.transform = "translate("+translate1+")";
        translate = true;
    } else if (translate === true) {
        document.getElementById('testanim').style.transform = "translate("+translate2+")";
        translate = false;
    }
}







