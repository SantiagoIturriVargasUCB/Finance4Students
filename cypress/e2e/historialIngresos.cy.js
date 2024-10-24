describe('Prueba del historial de ingresos', () => {

    it('Debería agregar un ingreso y mostrarlo en la lista', () => {
        cy.visit("/src/Ingreso/ingresos.html"); 
        cy.get('#monto').type(500);
        cy.get('#fecha').type("2024-10-23");
        cy.get('#descripcion').type("Sueldo");
        cy.get('#insert-button').click();
        cy.get('#ingreso-div').should('contain', 500)
        .and('contain', "2024-10-23")
        .and('contain', "Sueldo");
    });

    it('Debería mostrar el historial de ingresos cuando se hace clic en "Ver Historial"', () => {
        cy.visit("/src/Ingreso/ingresos.html"); 
        cy.get('#monto').type(500);
        cy.get('#fecha').type("2024-10-23");
        cy.get('#descripcion').type("Sueldo");
        cy.get('#insert-button').click();

        cy.get('#ver-historial').click();

        cy.get('#historial-lista').should('contain', 500)
        .and('contain', "2024-10-23")
        .and('contain', "Sueldo");
    });
});
