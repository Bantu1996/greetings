const greetButton = document.querySelector(".greetBtn");
const greetName = document.querySelector(".greetName");
const greetMessage = document.querySelector(".greetMessage");
const greetRadio = document.querySelector(".greetRadio");
const theNumber = document.querySelector(".theNumber")


// var greetedGreetNames;
// // if (localStorage['activeName']) {
//   greetedGreetNames = JSON.parse(localStorage.getItem('activeName'))

// // }

var greetInstance = GreetWithRespect();

function iribow() {

    const checkedRadioBtns = document.querySelector(".greetRadio:checked")
    if (checkedRadioBtns) {
        var selectedLanguage = checkedRadioBtns.value;
        var activeName = greetName.value;

        var greetingSet = greetInstance.greetingLanguages(selectedLanguage, activeName);
        var greetedCounter = greetInstance.greetCounter();
        var names = greetInstance.setName(activeName);
       //var greetCount = document.querySelector(".theNumber").innerHTML;
        greetMessage.innerHTML = greetingSet;
       theNumber.innerHTML = greetedCounter;
       greetName.innerHTML = names;

      
      localStorage.setItem('activeName', JSON.stringify(greetInstance.getName()));
      console.log(greetInstance.getName())
}

    }
     // document.querySelector(".theNumber").innerHTML = greetCount;
    
    greetButton.addEventListener("click", iribow)