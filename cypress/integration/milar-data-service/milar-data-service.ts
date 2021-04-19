context('milar-data-service', () => {
  describe('Success scenario', () => {
    it('should move the file in the processed location', () => {
      const inputFilePath: string = 'C:/Users/nikki/Desktop/cypress-file-automation/cypress/fixtures/files/SampleFile.xlsx';
      const sourceFilePath: string = 'C:/Users/nikki/Desktop/input/SampleFile.xlsx';
      const destinationFilePath: string = 'C:/Users/nikki/Desktop/output/SampleFile.xlsx';

      cy.task('copyFile', { source: inputFilePath, destination: sourceFilePath });
      cy.task('fileExists', { file: destinationFilePath, timeoutInSeconds: 60 }, { timeout: 120000 }).then((value) => {
        expect(value).to.be.true;
      });
    });
  });
});
