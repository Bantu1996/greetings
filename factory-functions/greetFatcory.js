function GreetWithRespect(saluted) {
const  greetedNames = saluted || {};

var greetCow = 0;

function setName(activeName) {
    if(activeName) {
    if(greetedNames[activeName] === undefined) {
       greetCow++;
       greetedNames[activeName] = 0;
    }
 }
}
    function greetingLanguages(selectedLanguage, activeName) {
       
        if (selectedLanguage === "English") {
            return "Hello, " + activeName;
        }
        if (selectedLanguage === "Afrikaans") {
            return "Goeie More, " + activeName;
        }
        if(selectedLanguage === "IsiXhosa") {
            return  "Molo, " + activeName;
        }
        else {
           return "Please select a language..."

       }

      
}

    function greetCounter() {
    return greetCow;
    }
    
       function getName() {
           return greetedNames;  
        }
    

    return {
        setName,
        greetingLanguages,
        greetCounter,
        getName
    }
}