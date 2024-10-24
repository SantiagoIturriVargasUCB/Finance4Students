describe("Crear Objetivo", () => {
    it("Debería mostrar el objetivo creado al usuario", () => {
      cy.visit("/src/ObjetivoAhorro/objetivos.html");
  
      cy.get("#objName").type("Vacaciones");
      cy.get("#objMount").type(1500);
      cy.get("#objDate").type("2025-02-10");
      
      cy.get("#obj-button").click();
  
      cy.get("#resultado-div").should("contain", "Vacaciones").and("contain", "1500").and("contain","2025-02-10");
    });
  });