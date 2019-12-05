var person = {
    name: "John",
    location: "US"
}; //styling convention

// console.log(typeof(person));

document.getElementById("pr").innerHTML = "This is generated.";
var x = document.getElementsByTagName("p");
document.write(x);
document.write(x[1].innerText);

document.getElementById("p1").style.color=("blue");
function displayalert() {
    alert("button clicked");
}

document.getElementById("newButton").addEventListener("click",displayalert);

function printNodeName(n) {
    console.log(n.printNodeName);
}

rn = document.getRootNode();
console.log(rn.printNodeName);
printNodeName(rn);


