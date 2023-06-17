import DynamicProperty from "../AssignmentPageObject/DynamicProperties.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Button',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.dynaminPropertiesUrl)
        const ln=new DynamicProperty();
        //ln.verifyColorOfText()
        ln.verifyTextOfRandmId("This text has random Id")
        ln.verifyColorOfTextAfterFiveSeconds()
        ln.verifyButtonEnableAfterfiveSeconds("Will enable 5 seconds")
        ln.verifyButtonVisableAfterFiveSeconds("Visible After 5 Seconds")
      })   
});
});