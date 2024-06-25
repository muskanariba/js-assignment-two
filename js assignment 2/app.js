var a = prompt("enter your city", "city name in lowercase");
var b = "karachi";
if (a === b) {
  alert("welcome to city of light");
}

var gender = prompt("enter your gender please");
var female = "female";
if (gender == female) {
  alert("hello madam");
} else {
  alert("hello sir");
}

var a = prompt("enter color of road traffic signal ");
b = "red";
c = "green";
d = "yellow";
if (a === b) {
  alert("must stop");
} else if (a === c) {
  alert("move now");
} else if (a === d) {
  alert("ready to move");
}

var fuel = +prompt("enter remaining fuel in car");
if (fuel < 0.25) {
  alert("please refill the fuel in your car ");
} else {
  alert(fuel);
}

var c = +prompt("marks obtained in three subjects");
var b = 300;
var a = (c / b) * 100;
document.write("marks obtained : " + c + "<br>");
document.write("total marks : " + b + "<br>");
document.write("percentage : " + a + "%" + "<br>");
if (a >= 80) {
  document.write("grade a" + "<br>");
  document.write("remarks : excellent ");
} else if (a >= 70) {
  document.write("grade b" + "<br>");
  document.write("remarks : good ");
} else if (a >= 60) {
  document.write("grade c" + "<br>");
  document.write("remarks : you need to improve ");
} else if (a < 60) {
  document.write("grade d" + "<br>");
  document.write("remarks : fails ");
}

var x = +prompt("guess a number between 1 to 10");
var z = 7;
if (x === z) {
  alert("Bingo! Correct answer");
} else if (x === ++z) {
  alert("Close enough to the correct answer");
} else {
  alert("better luck next time");
}

var a = +prompt("enter any number");
if (a % 3 === 0) {
  alert("the number is divisible by 3 ");
} else {
  alert("not divisible by 3");
}

var a = +prompt("enter any number");
if (a % 2 === 0) {
  alert("even number");
} else {
  alert("odd number");
}

var temp = +prompt("enter temperature");
if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today’s Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

var num1 = +prompt("enter a number");
var num2 = +prompt("enter second number");
document.write("addition : " + num1 + num2 + "<br>");
document.write("substraction : ", num1 - num2 + "<br>");
document.write("multiplication : " + num1 * num2 + "<br>");
document.write("division : " + num1 / num2 + "<br>");
document.write("modulus : " + (num1 % num2) + "<br>");
