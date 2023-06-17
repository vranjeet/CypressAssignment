describe("CodenBoc Automation lab",function(){
it('Alias Function',function(){
    cy.visit('https://codenboxautomationlab.com/wp-login.php')
    cy.wait(1000)
})
it('should fill invalid username and password',function(){
    cy.visit('https://codenboxautomationlab.com/wp-login.php')
    cy.get("input[name='log']").as('username')
    cy.get('@username').clear()
    cy.get('@username').type('NoName',{delay:50})
    cy.get("input[name='pwd']").as('password')
    cy.get('@password').clear()
    cy.get('@password').type('12345',{delay:50})
})

});