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
    cy.contains("a", "Registro de Gastos").click();
    cy.url().should("include", "/src/Gasto/gastos.html");

    // Registrar múltiples gastos
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
