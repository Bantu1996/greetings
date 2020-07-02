function GreetWithRespect(saluted) {
    const greetedNames = saluted || {};


    function setName(activeName) {
        if (activeName) {
            if (greetedNames[activeName] === undefined) {
                greetedNames[activeName] = 0;
            }
        }
        // errorhandler();
    }

    // function errorhandler(selectedLanguage, activeName){
    //     if(activeName === ""){
    //       return "Please enter the name"
    //     }
    //     if(activeName === "" && selectedLanguage === undefined){
    //      return "Please enter the name and select the the lang"
    //     }
    //     if(selectedLanguage === undefined){
    //    return "Please select the language"
    //     }
    //     if(activeName === true){
    //       return "Add a correct name format"
    //     }
    //   }


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
        // errorhandler();
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
       //  errorhandler
    }
}