describe("Begin new project spec", () => {
  it("creates a new design", () => {
    // visit project page
    cy.visit("http://localhost:3000/projects/2");

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
});
