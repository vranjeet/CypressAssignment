describe("OrangeHRM Test Suite",function(){
    it('Verify URL',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("include","orangehrmlive")
        cy.url().should("equal","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    });

    it('Verify title',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should("include","HRM")
        cy.title().should("eq","OrangeHRM")
 });

 it('Login and Logout',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get("input[name='username']").type("Admin").should("have.value","Admin")
    cy.get("input[name='password']").type("admin123").should("have.value","admin123")
    cy.get("button[type='submit']").click()
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard")
});
});