class Button{
    clickOnDoubleClickMeButton() 
     {
            cy.get("#doubleClickBtn").dblclick()
    }
    clickOnRightClickMeButton() 
     {
            cy.get("#rightClickBtn").rightclick()
    }
    clickOnClickMeButton() 
     {
          cy.xpath("(//button[contains(@class,'btn btn-primary')])[3]").click()
    }
   verifyTextAfterCLickOnDoubleClickMeButton(value)
    {
        cy.get('#doubleClickMessage').should("have.text",value)
    }
    verifyTextAfterCLickOnRightClickMeButton(value)
    {
        cy.get('#rightClickMessage').should("have.text",value)
    }
    verifyTextAfterClickOnClickMeButton(value)
    {
        cy.wait(5000)
        cy.get('#dynamicClickMessage').should("have.text",value)
    } 
}
export default Button;