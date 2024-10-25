describe("Historial Ingresos", () => {
    it("Muestra varios ingresos registrados correctamente", () => {
        cy.visit("/src/Ingreso/ingresos.html");

        // Registrar primer ingreso
        cy.get("#monto").type(1000);
        cy.get("#fecha").type("2023-12-20");
        cy.get("#descripcion").type("Venta de productos");
        cy.get("#registrar-button").click();

        // Registrar segundo ingreso
        cy.get("#monto").type(200);
        cy.get("#fecha").type("2024-01-10");
        cy.get("#descripcion").type("Servicios");
        cy.get("#registrar-button").click();

        // Registrar tercer ingreso
        cy.get("#monto").type(150);
        cy.get("#fecha").type("2024-02-15");
        cy.get("#descripcion").type("Consultoría");
        cy.get("#registrar-button").click();

        // Hacer clic en "Ver Historial"
        cy.get("#ver-historial").click();

        // Verificar que el historial de ingresos se muestra correctamente
        cy.get("#historial-lista")
            .should("contain", "Venta de productos").and("contain", 1000).and("contain", "2023-12-20")
            .and("contain", "Servicios").and("contain", 200).and("contain", "2024-01-10")
            .and("contain", "Consultoría").and("contain", 150).and("contain", "2024-02-15");
    });
});
