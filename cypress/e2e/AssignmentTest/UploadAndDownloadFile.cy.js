import FileUploadAndDownload from "../AssignmentPageObject/UploadAndDownloadFile.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('file upload uses cases', () => {
    it('simple file upload',()=>{
        cy.fixture('demoqa').then((data)=>{
        cy.visit(data.uploadAndDownloadUrl)
        const ln=new FileUploadAndDownload();
        ln.fileUpload(data.filePath)
        ln.clickOnDownload();
        ln.verifyDownloadFile()
        })

    })
});