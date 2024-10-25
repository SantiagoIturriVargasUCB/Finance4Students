describe("Historial Gastos", () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    cy.clearLocalStorage();
    // Iniciar sesión antes de visitar el Dashboard
    cy.visit('/src/LogIn/login.html');
    cy.get('input[name="email"]').type('validuser@example.com');
    cy.get('input[name="password"]').type('ValidPassword123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/Dashboard/dashboard.html');
  });

  it("Muestra el monto necesario", () => {
    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Registro de Gastos").should("exist").click();
    cy.url().should("include", "/src/Gasto/gastos.html");

    // Registrar múltiples gastos
    cy.get("#fecha").should("exist").type("2021-12-21");
    cy.get("#descripcion").should("exist").type("Libros");
    cy.get("#monto").should("exist").type(500);
    cy.get("#registrar-button").should("exist").click();

    cy.get("#fecha").should("exist").type("2022-01-10");
    cy.get("#descripcion").should("exist").type("Comida");
    cy.get("#monto").should("exist").type(60);
    cy.get("#registrar-button").should("exist").click();

    cy.get("#fecha").should("exist").type("2023-01-09");
    cy.get("#descripcion").should("exist").type("Bebida");
    cy.get("#monto").should("exist").type(70);
    cy.get("#registrar-button").should("exist").click();

    // Mostrar el historial de gastos
    cy.get("#mostrar-gastos-button").should("exist").click();

    // Verificar que el historial de gastos se muestra correctamente
    cy.get("#lista-gastos-div")
      .should("contain", "Libros")
      .and("contain", 500)
      .and("contain", "2021-12-21")
      .and("contain", "Comida")
      .and("contain", 60)
      .and("contain", "2022-01-10")
      .and("contain", "Bebida")
      .and("contain", 70)
      .and("contain", "2023-01-09");
  });
});
