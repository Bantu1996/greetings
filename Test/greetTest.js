describe("The Greetings factory function", function() {
    describe("enter the name of a user", function() {
  
  
      it ("should be able to greet Bantu once.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.setName("Bantu");
       
          assert.equal(1, greetThem.greetCounter());
    
        });
        it ("should be able to greet Bantu once.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.setName("Bantu");
          greetThem.setName("Bantu");
       
          assert.equal(1, greetThem.greetCounter());
    
        });
        it ("should be able to greet two different names once.", function () {

          let greetThem = GreetWithRespect();  
         

          greetThem.setName("Bantu");
          greetThem.setName("Zola");
       
          assert.equal(2, greetThem.greetCounter());
    
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
         
          greetThem.setName('Bantu');
          greetThem.setName('Breeze');
          greetThem.setName('Bee');
          greetThem.setName('Boss');
          greetThem.setName('Boo');
          greetThem.setName('Bobo');
          

      
          assert.equal(6, greetThem.greetCounter());
    
        });
});
});
