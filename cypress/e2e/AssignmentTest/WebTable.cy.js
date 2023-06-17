import WebTable from "../AssignmentPageObject/WebTable.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe("Demoqa Test Suite",function(){
 it('Web Table',()=>{
    cy.fixture('demoqa').then((data)=>{
        cy.visit(data.webTableUrl)
        const ln=new WebTable();
        ln.selectRow(data.dropDownValue,data.rowCount);
        ln.clickOnAdd();
        ln.verifyRegistrationForm(data.header);
        ln.setFirstName(data.firstName);
        ln.setLastName(data.lastName);
        ln.setEmailId(data.emailId);
        ln.setAge(data.age);
        ln.setsalary(data.salary);
        ln.setDepartment(data.department)
        ln.clickSubmit();
        ln.searchUserFirstName(data.firstName)
        ln.clickOnEditIcon()
        ln.verifyFirstName(data.firstName)
        ln.verifyLastName(data.lastName)
        ln.verifyEmailId(data.emailId)
        ln.verifyAge(data.age)
        ln.verifysalary(data.salary)
        ln.verifyDepartment(data.department)
        ln.clickSubmit()
        ln.clickOnDeleteIcon()
      })   
});
});