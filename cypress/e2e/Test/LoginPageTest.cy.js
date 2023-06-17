import Login from "../PageObject/LoginPage1.js";
describe("OrangeHRM Test Suite",function(){
 it('Login and Logout',()=>{
    cy.fixture('orangehrm').then((data)=>{
        cy.visit(data.url)
        const ln=new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin(data.expected) ; 
    })
    
});
});