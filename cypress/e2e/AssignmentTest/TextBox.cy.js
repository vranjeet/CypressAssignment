import TextBox from "../AssignmentPageObject/TextBox.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Text box',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.url)
        const ln=new TextBox();
        ln.setFullName(data.fullName)
        ln.setEmailId(data.emailId)
        ln.setCurrentAddress(data.currentAddress)
        ln.setPermanentAddress(data.permanentAddress);
        ln.clickSubmit();
        ln.verifyScreenAfterSubmit(data.fullName); 
    })   
});
});