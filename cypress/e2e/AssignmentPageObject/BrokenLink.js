class BrokenLink{
    checkStatusOfValidLink(){
    cy.request('GET',"http://demoqa.com").then((response)=>{
        expect(response.status).equal(200)
    })
}
checkStatusOfBrokenLink(){
    cy.request('GET',"http://the-internet.herokuapp.com").then((response)=>{
        expect(response.status).equal(200)
    })
}
}
export default BrokenLink;
