var g = new Date();
var time = g.getHours();

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
var input6 = document.getElementById('input6');
var input7 = document.getElementById('input7');
var input8 = document.getElementById('input8');
var input9 = document.getElementById('input9');

var par1 = 09;
var par2 = 10;
var par3 = 11;
var par4 = 12;
var par5 = 13;
var par6 = 14;
var par7 = 15;
var par8 = 16;
var par9 = 17;

var save = document.querySelector('saveBtn');

function myfunction1() {
    localStorage.setItem("userInput1", input1.value);
}

function myfunction2() {
    localStorage.setItem("userInput2", input2.value);
}

function myfunction3() {
    localStorage.setItem("userInput3", input3.value);
}

function myfunction4() {
    localStorage.setItem("userInput4", input4.value);
}

function myfunction5() {
    localStorage.setItem("userInput5", input5.value);
}

function myfunction6() {
    localStorage.setItem("userInpu6", input6.value);
}

function myfunction7() {
    localStorage.setItem("userInput7", input7.value);
}

function myfunction8() {
    localStorage.setItem("userInput8", input8.value);
}

function myfunction9() {
    localStorage.setItem("userInput9", input9.value);
}


function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

function tim() {
    console.log(time);
}



if (par1 < time) {
    input1.classList.add('past');
} else if (par1 === time) {
    input1.classList.add('present');
} else if (par1 > time) {
    input1.classList.add('future');
} else {
    console.log(time);
}

if (par2 < time) {
    input2.classList.add('past');
} else if (par2 === time) {
    input2.classList.add('present');
} else if (par2 > time) {
    input2.classList.add('future');
} else {
    console.log(time);
}

if (par3 < time) {
    input3.classList.add('past');
} else if (par3 === time) {
    input3.classList.add('present');
} else if (par3 > time) {
    input3.classList.add('future');
} else {
    console.log(time);
}

if (par4 < time) {
    input4.classList.add('past');
} else if (par4 === time) {
    input4.classList.add('present');
} else if (par4 > time) {
    input4.classList.add('future');
} else {
    console.log(time);
}

if (par5 < time) {
    input5.classList.add('past');
} else if (par5 === time) {
    input5.classList.add('present');
} else if (par5 > time) {
    input5.classList.add('future');
} else {
    console.log(time);
}

if (par6 < time) {
    input6.classList.add('past');
} else if (par6 === time) {
    input6.classList.add('present');
} else if (par6 > time) {
    input6.classList.add('future');
} else {
    console.log(time);
}

if (par7 < time) {
    input7.classList.add('past');
} else if (par7 === time) {
    input7.classList.add('present');
} else if (par7 > time) {
    input7.classList.add('future');
} else {
    console.log(time);
}

if (par8 < time) {
    input8.classList.add('past');
} else if (par8 === time) {
    input8.classList.add('present');
} else if (par8 > time) {
    input8.classList.add('future');
} else {
    console.log(time);
}

if (par9 < time) {
    input9.classList.add('past');
} else if (par9 === time) {
    input9.classList.add('present');
} else if (par9 > time) {
    input9.classList.add('future');
} else {
    console.log(time);
}



getHeaderDate()
tim()