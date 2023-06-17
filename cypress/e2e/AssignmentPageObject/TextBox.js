class TextBox{
    setFullName(fullName)
    {
        cy.get("#userName").type(fullName).should("have.value",fullName)
    }
    setEmailId(emialId)
    {
        cy.get("#userEmail").type(emialId).should("have.value",emialId)
    }
    setCurrentAddress(currentAddress)
    {
        cy.get("#currentAddress").type(currentAddress).should("have.value",currentAddress)
    }
    setPermanentAddress(permanentAddress)
    {
        cy.get("#permanentAddress").type(permanentAddress).should("have.value",permanentAddress)
    }
    clickSubmit()
    {
        cy.get("#submit").click()
    }
    verifyScreenAfterSubmit(value)
    {
        cy.get("#name").should('contain',value)
    }
 }
 export default TextBox;