class DynamicProperty{
    verifyTextOfRandmId(value) 
     {
          cy.xpath("//div/p").should("have.text",value)
    }
    verifyColorOfText() 
     {
        cy.get("#colorChange").should('have.css', 'color').and('eq', 'rgb(255, 255, 255)')
    }
    verifyColorOfTextAfterFiveSeconds() 
     {
        cy.wait(1000)
        cy.get("#colorChange").should('have.css', 'color').and('eq', 'rgb(220, 53, 69)')
    }
    verifyButtonEnableAfterfiveSeconds(value)
    {
        cy.get("#enableAfter").should('contain',value)
    }
    verifyButtonVisableAfterFiveSeconds(value)
    {
        cy.get("#visibleAfter").should('contain',value)
    }
     
     

}
export default DynamicProperty;