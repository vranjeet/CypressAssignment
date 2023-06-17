import NewTab from "../AssignmentPageObject/HandleNewTab.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Handling new Tab',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.newTabUrl)
        const ln=new NewTab();
        ln.handleNewTab(data.path)
        cy.visit(data.newTabUrl)
        ln.handleNewTab(data.path1)
      })   
});
});