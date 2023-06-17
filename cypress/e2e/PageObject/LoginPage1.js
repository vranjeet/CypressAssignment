class Login{
    txtUserName="input[name='username']";
    txtPassword="input[name='password']";
    btnSubmit="button[type='submit']";
    lblmsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    setUserName(userName)
    {
        cy.get(this.txtUserName).type(userName).should("have.value",userName)
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password).should("have.value",password)
    }
    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin(value)
    {
        cy.get(this.lblmsg).should("have.text",value)
    }
 }
 export default Login;