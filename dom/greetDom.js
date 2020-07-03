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
    theNumber.innerHTML = greetInstance.greetCounter();;
})

var greetInstance = GreetWithRespect(greetedGreetNames);

function iribow() {

    const userGama = greetName.value;
    var activeName = userGama.charAt(0).toUpperCase() + userGama.slice(1).toLowerCase()

    if (activeName) {
        greetInstance.setName(activeName);
    }

    var selectedLanguage = document.querySelector(".greetRadio:checked")
    if (activeName === "" && selectedLanguage === null) {

        greetMessage.innerHTML = "Please enter the name and select the the lang"
    }
    else if (activeName === "") {
        greetMessage.innerHTML = "Please enter the name"
    }
    else if (selectedLanguage === null) {
        greetMessage.innerHTML = "Please select the language"
    }

    else if (!(activeName === "" && selectedLanguage === null)) {
        greetMessage.innerHTML = greetInstance.greetingLanguages(selectedLanguage.value, activeName);
        localStorage.setItem('name', JSON.stringify(greetInstance.getName()));
        theNumber.innerHTML = greetInstance.greetCounter();


        var timeleft = 10;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                location.reload();
                clearInterval(downloadTimer);
                rush.innerHTML = "Finished";
            } else {
                rush.innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
        }, 1000);
        
    }

}
function resetButton() {
    location.reload()
    localStorage.clear()
}

resetBtnElem.addEventListener('click', resetButton)
greetButton.addEventListener("click", iribow)
