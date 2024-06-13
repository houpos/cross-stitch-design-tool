describe("Begin new project spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(`[data-cy="create"]`).first().click();
  });

  xit("opens and closes the modal", () => {
    cy.get(`[data-cy="cancel"]`).first().click();
    cy.get("dialog").should("not.have.attr", "open");
  });

  xit("creates a new design", () => {
    // fill out form
    cy.get(`[data-cy="projectTitle"]`).type("{selectAll}This is a test");
    cy.get(`[data-cy="projectDimensions"]`).select("4 x 4");
    cy.get(`[data-cy="submit"]`).click();

    // navigate to new project page
    cy.url().should("include", "/projects/project-1");
  });

  it("handles invalid project titles", () => {
    // remove all text in project title
    cy.get(`[data-cy="projectTitle"]`).type("{selectAll}{backspace}");
    cy.get(`[data-cy="submit"]`).should("have.attr", "disabled");
    cy.get(`[data-cy="projectTitle"]:invalid`).should("exist");

    // type correct title
    cy.get(`[data-cy="projectTitle"]`).type("A Test");
    cy.get(`[data-cy="submit"]`).should("not.have.attr", "disabled");

    // add special characters in project title
    cy.get(`[data-cy="projectTitle"]`).type("{insert}*%^&");
    cy.get(`[data-cy="submit"]`).should("have.attr", "disabled");
  });
});
