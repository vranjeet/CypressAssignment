describe('file upload uses cases', () => {
    it('simple file upload',()=>{
    cy.visit("https://automationpractice.pl/index.php?controller=contact")
    const filepath='camera.png'
    cy.get('#fileUpload').attachFile(filepath);

    })
    it('drag and drop file upload',()=>{
        cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/")
        const filepath='camera.png'
        cy.get('#file').attachFile(filepath);
        cy.get('.box__success').should('contain.text','Done!')
        });
    it('Multiple files upload',()=>{
            cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
            const yourFixturefilepath='camera.png'
            const yourFixturefilepath1='logo.png'
            const yourFixturefilepath2='Sample claim form.pdf'
            cy.get('#filesToUpload')
            .attachFile(yourFixturefilepath)
            .attachFile(yourFixturefilepath1)
            .attachFile(yourFixturefilepath2)
            cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
            });
    it('Change file name while uploading',()=>{
                cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
                const yourFixturefilepath='camera.png'
                cy.get('#filesToUpload')
                .attachFile({filePath:yourFixturefilepath,filename:"logo.png"})
                cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
                });
});