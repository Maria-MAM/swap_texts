var primaF = function myF() {
    document.getElementById('output').value = document.getElementById('input').value;
    document.getElementById('output').style.fontWeight = "bold";
    /*document.getElementById('output').style.color="#FFA500";*/
    document.getElementById('input').value = '';
};
var douaF = function myF2() {
    document.getElementById('input').value = document.getElementById('output').value;
    document.getElementById('input').style.fontWeight = "bold";
    /*document.getElementById('input').style.color="#32CD32";*/
    document.getElementById('output').value = '';
};
// function empty() {
//    for (i = 0; i < document.getElementsByTagName('input').length; i++) {
//    document.getElementsByTagName('input')[i].value= '';
//  }
// }

function empty() {
    for (i = 0; i < document.querySelectorAll('input').length; i++) {
        document.querySelectorAll('input')[i].value = '';
    }
};

let change = document.getElementById('btn');
change.addEventListener('click', function () {
    if (document.getElementById('input').value.length !== 0) {
        primaF();
    } else if (document.getElementById('output').value.length !== 0) {
        douaF();
    }
});

let text = document.getElementById('input');
let culoareRosie;
text.addEventListener('keyup', function (e) {
    if (e.keyCode > 47 && e.keyCode < 58) {
        text.style.color = 'black';
        culoareRosie = false;
    } else {
        text.style.color = '#ff0000';
        culoareRosie = true;
    }
});

change.addEventListener('click', function () {
    if (culoareRosie === true) {
        alert('Are you sure?')
    }
});