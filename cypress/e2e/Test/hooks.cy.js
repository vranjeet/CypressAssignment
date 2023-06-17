//Hooks are from mocha

/*
1- before->Executed once, as soon as the first TS is executed.
2-beforeEach->Executed before EACH TS
3-testExecution->
4-afterEach->Executed after each TS
5-after->Executed once, as soon as the last TS
*/
describe('Hok demo', () => {
    before(() => {
        cy.log("Before")
    });
    beforeEach(() => {
        cy.log("BeforeEach")
    });
    it('TC first',function(){
      console.log("TC # first")
    });
    it('TC two',function(){
        console.log("TC # Second")
    });
    it.skip('TC three',function(){//skip the current tc
        console.log("TC # third")
    });
    it.only('TC four',function(){//only use when we want to execute only current tc
        console.log("TC # fourth")
    });
    afterEach(() => {
         cy.log("After each")
    });
    after(() => {
        cy.log("after")
    });
});