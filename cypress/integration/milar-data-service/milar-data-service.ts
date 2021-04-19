context('milar-data-service', () => {
  const inputFileDirectory: string = './cypress/fixtures/files/';
  const inputFileName: string = 'SampleFile.xlsx';
  const inputFilePath: string = inputFileDirectory + inputFileName;

  const sourceFileDirectory: string = 'C:/Users/nikki/Desktop/input/';
  const destinationFileDirectory: string = 'C:/Users/nikki/Desktop/output/';
  
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
// Set paths using environment variables
// Build Jenkins pipeline job
// Configure Jenkinsfile to include drive mounts
