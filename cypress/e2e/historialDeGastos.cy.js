describe("Historial Gastos", () => {
    it("Muestra el monto necesario", () => {
        cy.visit("/src/gastos/gastos.html");
        cy.get("#fecha").type("2021-12-21");
        cy.get("#descripcion").type("Libros");
        cy.get("#monto").type(500);
        cy.get("#registrar-button").click();

        cy.get("#fecha").type("2022-01-10");
        cy.get("#descripcion").type("Comida");
        cy.get("#monto").type(60);
        cy.get("#registrar-button").click();

        cy.get("#fecha").type("2023-01-09");
        cy.get("#descripcion").type("Bebida");
        cy.get("#monto").type(70);
        cy.get("#registrar-button").click();

        cy.get("#mostrar-gastos-button").click();

        cy.get("#lista-gastos-div").should("contain", "Libros").and("contain", 500).and("contain","2021-12-21")
        .and("contain", "Comida").and("contain", 60).and("contain","2022-01-10")
        .and("contain", "Comida").and("contain", 70).and("contain","2023-01-09");
        
      });


  });
  