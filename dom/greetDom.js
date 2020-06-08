const greetButton = document.querySelector(".greetBtn");
const greetName = document.querySelector(".greetName");
const greetMessage = document.querySelector(".greetMessage");
const greetRadio = document.querySelector(".greetRadio");
const theNumber = document.querySelector(".theNumber")

var greetInstance = GreetWithRespect();

function iribow() {

    activeName = greetName.value;
    var greetingHumans = greetInstance.dumelang(activeName);
    var cownt = document.querySelector(".theNumber").innerHTML;

if (activeName  === "") {
    cownt;
}
else {
    cownt++;
}


document.querySelector(".theNumber").innerHTML = cownt;


alert(cownt)
    } 

greetButton.addEventListener("click", iribow)