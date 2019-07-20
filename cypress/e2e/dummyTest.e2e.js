describe('Kitten app', () => {
  it('Dummy test', () => {
    cy.visit('/').getByText('Hello World');
  });
});
