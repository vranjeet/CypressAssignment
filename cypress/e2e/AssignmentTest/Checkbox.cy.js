import CheckBox from "../AssignmentPageObject/Checkbox.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Check box',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.checkBoxUrl)
        const ln=new CheckBox();
        ln.selectCheckBox();
        ln.verifyTextAfterSelectCheckBox(data.text); 
    })   
});
});