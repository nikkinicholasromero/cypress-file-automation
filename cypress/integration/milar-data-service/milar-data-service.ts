context('milar-data-service', () => {
  let inputFileDirectory: string = './cypress/fixtures/files/';
  let inputFileName: string = 'SampleFile.xlsx';
  let inputFilePath: string = inputFileDirectory + inputFileName;

  let sourceFileDirectory: string = Cypress.env("sourceFileDirectory");
  let destinationFileDirectory: string = Cypress.env("destinationFileDirectory");
  
  describe('Success scenario', () => {
    it('should move the file in the processed location', () => {
      cy.task('copyFile', { source: inputFilePath, destination: sourceFileDirectory + inputFileName });

      cy.task('fileExists', { directory: destinationFileDirectory, fileName: inputFileName, timeoutInSeconds: 60 }, { timeout: 120000 }).then((value) => {
        expect(value).to.be.true;
      });

      cy.task('fileExists', { directory: sourceFileDirectory, fileName: inputFileName, timeoutInSeconds: 5 }, { timeout: 120000 }).then((value) => {
        expect(value).to.be.false;
      });
    });
  });
});


// TODO :
// Clear directories beforeEach
// Build Jenkins pipeline job
// Configure Jenkinsfile to include drive mounts
