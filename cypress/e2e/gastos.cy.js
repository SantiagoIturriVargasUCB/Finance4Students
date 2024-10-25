describe("Registrar Gastos", () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    cy.clearLocalStorage();
    // Iniciar sesión antes de visitar el Dashboard
    cy.visit('/src/LogIn/login.html');
    cy.get('input[name="email"]').type('validuser@example.com');
    cy.get('input[name="password"]').type('ValidPassword123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/src/Dashboard/dashboard.html');
  });
  
  // Caso 1: Registrar un gasto exitosamente y verificar el monto
  it("Muestra el monto necesario", () => {
    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Registro de Gastos").should("exist").click(); // Verifica que el enlace existe antes de hacer clic
    cy.url().should("include", "/src/Gasto/gastos.html");

    // Llenar el formulario de gastos
    cy.get("#fecha").type("2021-12-21");
    cy.get("#descripcion").type("Libros");
    cy.get("#monto").type(500);

    // Enviar el formulario de registro de gastos
    cy.get("#registrar-button").should("exist").click();

    // Verificar que el monto registrado aparezca en el resultado
    cy.get("#resultado-div").should("contain", 500);
  });

  // Caso 2: Verificar los datos de los gastos registrados
  it("Muestra los datos de los gastos registrados", () => {
    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Registro de Gastos").should("exist").click(); // Verifica que el enlace existe antes de hacer clic
    cy.url().should("include", "/src/Gasto/gastos.html");

    // Registrar el primer gasto
    cy.get("#fecha").type("2021-12-21");
    cy.get("#descripcion").type("Comida");
    cy.get("#monto").type(100);
    cy.get("#registrar-button").should("exist").click();

    // Verificar que los datos del gasto registrado aparezcan en el resultado
    cy.get("#resultado-div")
      .should("contain", "2021-12-21")
      .and("contain", "Comida")
      .and("contain", 100);
  });
});
