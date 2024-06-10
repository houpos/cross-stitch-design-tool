describe("Begin new project spec", () => {
  it("opens and closes the modal", () => {
    cy.visit("http://localhost:3000/");
    cy.get(`[data-cy="create"]`).first().click();
    cy.get(`[data-cy="cancel"]`).first().click();
    cy.get('dialog').should('not.have.attr', 'open');
  });

  it("creates a new design", () => {
    // fill out form
    cy.visit("http://localhost:3000/");
    cy.get(`[data-cy="create"]`).first().click();
    cy.get(`[data-cy="projectTitle"]`).type("{selectAll}This is a test");
    cy.get(`[data-cy="projectDimensions"]`).select("4 x 4");
    cy.get(`[data-cy="submit"]`).click();

    // navigate to new project page
    cy.url().should("include", "/projects/project-1");
  });
});
