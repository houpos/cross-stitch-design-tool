describe("Begin new project spec", () => {
  beforeEach(() => {
    // visit project page
    cy.visit("http://localhost:3000/projects/2");
  })
  it("creates a new design", () => {
    // select a color
    cy.get('[data-cy="color"]').eq(3).click();

    // color in the grid
    cy.get('[data-cy="colorTheGrid"]')
      .first()
      .click()
      .parent()
      .should(
        "have.css",
        "background",
        "rgb(206, 148, 186) none repeat scroll 0% 0% / auto padding-box border-box"
      );
  });

  it("produces instructions", () => {
    // select a color
    cy.get('[data-cy="color"]').eq(4).click();

    // color in the grid
    cy.get('[data-cy="colorTheGrid"]')
      .first()
      .click();

    // generate instructions
    cy.get('a[href="/projects/2/instructions"]').should("be.visible");
    cy.get('[data-cy="generateInstructions"]').click();

    // check instructions
    cy.get('h1').should('have.text', 'Second Project');
    cy.get('[data-cy="designTable"] td').first().should('have.text', 'A');
    cy.get('[data-cy="finalProjectDimensions"]').should(
      "have.text",
      "Dimensions (W x H): 2in x 2in"
    );
    cy.get('[data-cy="finalProjectStitchCount"]').should(
      "have.text",
      "Stitch count: 1"
    );
    cy.get('[data-cy="flossCalculations"]').find("td")
      .should("have.length", 5);

    // print
    cy.get('[data-cy="print"]').should("be.visible");
  })
});
