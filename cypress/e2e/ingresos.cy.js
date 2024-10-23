describe("Ingresos", () => {
    it("Muestra el monto, fecha y decripcion de un ingreso", () => {
        cy.visit("/");
        cy.get("#monto").type(100);
        cy.get("#fecha").type("2004-10-27");
        cy.get("#descripcion").type("Ingreso de prueba"); 
        cy.get("#insert-button").click();
        cy.get("#ingreso-div")
            .should("contain","100")
            .and("contain", "2004-10-27")
            .and("contain", "Ingreso de prueba");
    });
});
