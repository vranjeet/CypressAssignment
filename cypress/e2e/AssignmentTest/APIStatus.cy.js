import APIStatus from "../AssignmentPageObject/APIStatus.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Handling new Tab',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.newTabUrl)
        const ln=new APIStatus();
        ln.clickOnCreateLink()
        ln.verifyStatusMessage(data.statusMessageOfCreateLink)
        ln.clickOnNoContentLink()
        ln.verifyStatusMessage(data.statusMessageOfNoContent)
        ln.clickOnMovedLink()
        ln.verifyStatusMessage(data.statusMessageOfMoved)
        ln.clickOnBadRequestLink()
        ln.verifyStatusMessage(data.statusMessageOfBadRequest)
        ln.clickOnUnauthorizedLink()
        ln.verifyStatusMessage(data.statusMessageOfUnauthorized)
        ln.clickOnForbiddenLink()
        ln.verifyStatusMessage(data.statusMessageOfForbidden)
        ln.clickOnInvalidUrlLink()
        ln.verifyStatusMessage(data.statusMessageOfNotFound)
      })   
});
});