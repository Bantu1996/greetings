const greetButton = document.querySelector(".greetBtn");
const greetName = document.querySelector(".greetName");
const greetMessage = document.querySelector(".greetMessage");
const greetRadio = document.querySelector(".greetRadio");
const theNumber = document.querySelector(".theNumber")

const resetBtnElem = document.querySelector(".resetBtn")


var greetedGreetNames;
 if (localStorage['name']) {
  greetedGreetNames = JSON.parse(localStorage.getItem('name'))

 }

 window.addEventListener('load', function(){
    theNumber.innerHTML =  greetInstance.greetCounter();;

 })

var greetInstance = GreetWithRespect(greetedGreetNames);

function iribow() {

    const checkedRadioBtns = document.querySelector(".greetRadio:checked")
    if (checkedRadioBtns) {
        var selectedLanguage = checkedRadioBtns.value;
        var activeName = greetName.value;

        var greetingSet = greetInstance.greetingLanguages(selectedLanguage, activeName);
        var names = greetInstance.setName(activeName);
     
      localStorage.setItem('name', JSON.stringify(greetInstance.getName()));

      greetMessage.innerHTML = greetingSet;
      theNumber.innerHTML =  greetInstance.greetCounter();;

}

    }

    function resetButton(){
        location.reload()
        localStorage.clear()
    }

    resetBtnElem.addEventListener('click', resetButton)
    greetButton.addEventListener("click", iribow)