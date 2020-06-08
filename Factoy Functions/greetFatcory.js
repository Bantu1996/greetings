function GreetWithRespect() {

    function dumelang() {

        activeName = greetName.value;

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
        
        

   
}
    }
    return {
        dumelang
    }
}