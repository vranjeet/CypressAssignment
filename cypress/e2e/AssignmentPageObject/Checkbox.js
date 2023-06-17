class CheckBox{
    selectCheckBox()
    {
        cy.get(".rct-checkbox").click()
    }
    verifyTextAfterSelectCheckBox(value)
    {
        cy.get("#result").should('contain',value)
    }
 }
 export default CheckBox;