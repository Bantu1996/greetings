describe("The Greetings factory function", function() {
    describe("enter the name", function() {
  
  
      it ("should be able to greet any name.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.setName("activeName");
        const response = greetThem.setName("activeName")
          assert.equal(response);
    
        });

    })
    describe("radio buttons", function() {
  
  
      it ("should be able to greet any name in IsiXhosa.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.greetingLanguages("IsiXhosa", "Bantu");
        const respe = greetThem.greetingLanguages("IsiXhosa", "Bantu")
          assert.equal("Molo, Bantu", respe);
    
        });
        it ("should be able to greet any name in English.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.greetingLanguages("English", "Bantu");
        const respe = greetThem.greetingLanguages("English", "Bantu")
          assert.equal("Hello, Bantu", respe);
    
        });
        it ("should be able to greet any name in Afrikaans.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.greetingLanguages("Afrikaans", "Bantu");
        const respe = greetThem.greetingLanguages("Afrikaans", "Bantu")
          assert.equal("Goeie More, Bantu", respe);
    
        });
    })
    describe("counter", function() {
  
  
      it ("should be able to count greeted names.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.greetCounter();
          

      
          assert.equal(0, greetThem.greetCounter());
    
        });
});
});
