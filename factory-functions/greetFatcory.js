function GreetWithRespect(saluted) {
    const greetedNames = saluted || {};


    function setName(activeName) {
        if (activeName) {
            if (greetedNames[activeName] === undefined) {
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
        if (selectedLanguage === "IsiXhosa") {
            return "Molo, " + activeName;
        }
       
    }

    function greetCounter() {
        var namesList = Object.keys(greetedNames)
        return namesList.length;
    }

    function getName() {
        return greetedNames;
    }


    return {
        setName,
        greetingLanguages,
        greetCounter,
        getName,
     
    }
}