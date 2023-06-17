import RadioButton from "../AssignmentPageObject/RadioButton.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Radio button',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.radioButtonUrl)
        const ln=new RadioButton();
        ln.selectYesRadioButton();
        ln.verifyTextAfterSelectRadioButton("Yes"); 
        ln.selectImpressiveRadioButton();
        ln.verifyTextAfterSelectRadioButton("Impressive"); 
        ln.verifyNoRadioButton()
    })   
});
});