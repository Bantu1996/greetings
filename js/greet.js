const greetButton = document.querySelector(".greetBtn");
const greetName = document.querySelector(".greetName");
const greetMessage = document.querySelector(".greetMessage");
const greetRadio = document.querySelector(".greetRadio");
const theNumber = document.querySelector(".theNumber")

function Dumelang() {

const activeName = greetName.value;
 var currentNumber = theNumber.value;

const message = "Hello, " + activeName ;
const myalezo = "Molo, " + activeName ;
const boodskap = "Goeie More, " + activeName ;

const checkedRadioBtns = document.querySelector(".greetRadio:checked")
if (checkedRadioBtns){
 var  greetRadio = checkedRadioBtns.value

var greetingsRadio = greetRadio;



if (greetingsRadio === "English") {

    greetMessage.innerHTML = message;
    
}
else if (greetingsRadio === "Afrikaans") {

    greetMessage.innerHTML = boodskap;
  
}
else {
    greetMessage.innerHTML = myalezo;
   
}

var cownt = document.querySelector(".theNumber").innerHTML;
if (activeName === "") {
    cownt;
}
else {
 cownt++;  
}


document.querySelector(".theNumber").innerHTML = cownt;


//alert(activeName)
    } 
}
greetButton.addEventListener("click", Dumelang)