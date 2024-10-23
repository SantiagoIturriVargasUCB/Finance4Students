describe("Registrar Gastos", () => {
    it("Muestra el monto necesario", () => {
        cy.visit("/");
        cy.get("#fecha").type("2021-12-21");
        cy.get("#descripcion").type("Libros");
        cy.get("#monto").type(500);
        cy.get("#registrar-button").click();
        cy.get("#resultado-div").should("contain", 500);
      });


    it("Muestra los datos de los gastos registrados", () => {
      cy.visit("/");
      cy.get("#fecha").type("2021-12-21");
      cy.get("#descripcion").type("Comida");
      cy.get("#monto").type(100);
      cy.get("#registrar-button").click();
      cy.get("#resultado-div").should("contain", "2021-12-21")
      .and("contain", "Comida")
      .and("contain", 100);
    });
  });
  