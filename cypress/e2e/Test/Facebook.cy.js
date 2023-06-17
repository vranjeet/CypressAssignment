describe("OrangeHRM Test Suite",function(){
    it('Verify URL',function(){
        cy.visit("https://www.facebook.com/login/")
        cy.url().should("include","facebook")
        cy.url().should("equal","https://www.facebook.com/login/")
    });

    it('Verify title',function(){
        cy.visit("https://www.facebook.com/login/")
        cy.title().should("include","Facebook")
        cy.title().should("eq","Facebook")
 });

 it('Login and Logout',function(){
    cy.visit("https://www.facebook.com/login/")
    cy.get("#email").type("Admin").should("have.value","Admin")
    cy.get("#pass").type("1234").should("have.value","1234")
    cy.get("#loginbutton").click()
});
});