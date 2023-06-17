describe('My first Test Suite', () => {
    it('should login to the application using custom command',function()  {
        cy.visit('https://codenboxautomationlab.com/wp-login.php')
        cy.login('ranjeet','12345')
        cy.get('#login_error').should('contain','Error:')
    }); 
});