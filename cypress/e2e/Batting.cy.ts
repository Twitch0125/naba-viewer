/// <reference types="cypress" />
describe("Batting", () => {
  beforeEach(() => {
    //visit page
    cy.visit("http://localhost:3000");
  });
  const checkForTable = () => {
    //checking for stats table
    cy.get("table").should("be.visible");
    cy.get("th")
      .contains("Player ID", { matchCase: false })
      .should("be.visible");
  };
  it("Drag and Drop CSV file", () => {
    cy.fixture("player_batting_stats.csv", { encoding: null }).as(
      "playerStats"
    );
    cy.contains("Upload a file").selectFile("@playerStats", {
      action: "drag-drop",
    });
  });
  it("Click to Upload file", () => {
    cy.fixture("player_batting_stats.csv", { encoding: null }).as(
      "playerStats"
    );
    cy.contains("Upload a file").selectFile("@playerStats", {
      action: "select",
    });
    checkForTable();
  });
});
