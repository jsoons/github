document.write("Hello World.");
var number = "1234567890";
try {
  if (number.length !=10) {
    throw ("Please enter a 10-digit number!");
  } else {
    document.write(number);
  }
   

} catch (e) {
  alert ("Error "+e);
} finally {
  document.write("</BR> This is always executed.");
}

var text = "I like an apple...";
pat = /apple/;
document.write(text.replace(pat,"pie"));

x = 10;
document.write(x);
var x;  //hoisting, bad practice
