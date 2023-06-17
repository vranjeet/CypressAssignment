 class Login{
    setUserName(userName)
    {
        cy.get("input[name='username']").type(userName).should("have.value",userName)
    }
    setPassword(password)
    {
        cy.get("input[name='password']").type(password).should("have.value",password)
    }
    clickSubmit()
    {
        cy.get("button[type='submit']").click()
    }
    verifyLogin(value)
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",value)
    }
 }
 export default Login;