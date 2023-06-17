class NewTab{
    handleNewTab(path) 
     {
            cy.get(path)
              .invoke("removeAttr","target")
              .click()
            cy.xpath("(//div[contains(@class,'card-body')]/h5)[1]").should("have.text","Elements")
    }    
}
export default NewTab;