class RadioButton{
    selectYesRadioButton()
    {
        cy.get("#yesRadio").check({ force: true })
    }
    selectImpressiveRadioButton()
    {
        cy.get("#impressiveRadio").check({ force: true })
    }
    verifyNoRadioButton(){
     cy.get("#noRadio").should('be.disabled')
    }
    verifyTextAfterSelectRadioButton(value)
    {
        cy.get('.text-success').should("have.text",value)
    }
 }
 export default RadioButton;