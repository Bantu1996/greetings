const greetButton = document.querySelector(".greetBtn");
const greetName = document.querySelector(".greetName");
const greetMessage = document.querySelector(".greetMessage");
const greetRadio = document.querySelector(".greetRadio");
const theNumber = document.querySelector(".theNumber");
const resetBtnElem = document.querySelector(".resetBtn");
const rush = document.getElementById("countdown");

var greetedGreetNames;
if (localStorage['name']) {
    greetedGreetNames = JSON.parse(localStorage.getItem('name'))

}
window.addEventListener('load', function () {
    theNumber.innerHTML = greetInstance.greetCounter();

})

var greetInstance = GreetWithRespect(greetedGreetNames);

function iribow() {

    const userGama = greetName.value;
    var activeName = userGama.charAt(0).toUpperCase() + userGama.slice(1).toLowerCase()
    var namePattern = /^[a-zA-Z]+$/;
    if (activeName) {
        greetInstance.setName(activeName);
    }

    var selectedLanguage = document.querySelector(".greetRadio:checked")
    if (activeName === "" && selectedLanguage === null) {

        greetMessage.innerHTML = "Please enter the name and select the the lang"
        setTimeout(function () {
            greetMessage.innerHTML = ""
            location.reload();
        }, 5000)
    }
    else if (activeName === "") {
        greetMessage.innerHTML = "Please enter the name"
        setTimeout(function () {
            greetMessage.innerHTML = ""
            location.reload();
        }, 5000)
    }
    else if (selectedLanguage === null) {
        greetMessage.innerHTML = "Please select the language"
        setTimeout(function () {
            greetMessage.innerHTML = ""
            location.reload();
        }, 5000)
    }
    else if (userGama !== "" && !namePattern.test(userGama)) {
        greetMessage.innerHTML = "Please enter a name without numbers"
        setTimeout(function () {
            greetMessage.innerHTML = ""
            location.reload();
        }, 5000)
    }
    else if (activeName && selectedLanguage) {
        greetMessage.innerHTML = greetInstance.greetingLanguages(selectedLanguage.value, activeName);
        localStorage.setItem('name', JSON.stringify(greetInstance.getName()));
        theNumber.innerHTML = greetInstance.greetCounter();
        setTimeout(function () {
            greetMessage.innerHTML = " "
            location.reload();
        }, 5000)

    }
}
function resetButton() {
    location.reload()
    localStorage.clear()
}

resetBtnElem.addEventListener('click', resetButton)
greetButton.addEventListener("click", iribow)
