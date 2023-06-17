import Button from "../AssignmentPageObject/Buttons.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Button',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.buttonUrl)
        const ln=new Button();
        ln.clickOnDoubleClickMeButton()
        ln.verifyTextAfterCLickOnDoubleClickMeButton("You have done a double click")
        ln.clickOnRightClickMeButton()
        ln.verifyTextAfterCLickOnRightClickMeButton("You have done a right click")
        ln.clickOnClickMeButton()
        ln.verifyTextAfterClickOnClickMeButton("You have done a dynamic click")
      })   
});
});