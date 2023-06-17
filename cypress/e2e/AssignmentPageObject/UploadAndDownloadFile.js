class FileUploadAndDownload
{
    fileUpload(filePath)
    {
        cy.get('#uploadFile').attachFile(filePath);
    }
    clickOnDownload()
    {
        cy.get('#downloadButton').click()
    }
    verifyDownloadFile()
    {
        cy.verifyDownload('.jpeg', { contains: true });
    }    
}
export default FileUploadAndDownload;