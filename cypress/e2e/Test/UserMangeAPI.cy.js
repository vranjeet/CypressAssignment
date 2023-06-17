Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
context('UserManage API automation test', () => {
    it('GET-list user',()=>{
        cy.fixture('demoqa').then((data)=>{
        cy.visit(data.newTabUrl)
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(200)
        })
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(204)
        })
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(301)
        })
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(400)
        })
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(401)
        })
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(403)
        })
        cy.request('GET',"javascript:void(0)").then((response)=>{
            expect(response.status).equal(404)
        })
        })
    })
});