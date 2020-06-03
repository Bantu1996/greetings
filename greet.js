const greetButton = document.querySelector(".greetBtn");
const greetName = document.querySelector(".greetName");
const greetMessage = document.querySelector(".greetMessage")

function Dumelang() {

const activeName = greetName.value;

const message = "Hello, " + activeName;

greetMessage.innerHTML = message;
// if ( greetMessage.innerHTML === ""){

//     greetMessage.innerHTML = "Please enter name";
// }
//     else{
//         greetMessage.innerHTML = ""; 
//     }

    }

greetButton.addEventListener("click", Dumelang)