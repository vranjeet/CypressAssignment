import BrokenLink from "../AssignmentPageObject/BrokenLink.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Handling new Tab',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.brokenLinkUrl)
        const ln=new BrokenLink();
        ln.checkStatusOfValidLink()
        ln.checkStatusOfBrokenLink()    
      })   
});
});