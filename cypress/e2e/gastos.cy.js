describe("Registrar Gastos", () => {
  // Caso 1: Registrar un gasto exitosamente y verificar el monto
  it("Muestra el monto necesario", () => {
    // Visita la página de login
    cy.visit("/src/LogIn/login.html");

    // Llenar el formulario de inicio de sesión
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("ValidPassword123");

    // Enviar el formulario y verificar la redirección al Dashboard
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/Dashboard/dashboard.html");

    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Registro de Gastos").click();
    cy.url().should("include", "/src/Gasto/gastos.html");

    // Llenar el formulario de gastos
    cy.get("#fecha").type("2021-12-21");
    cy.get("#descripcion").type("Libros");
    cy.get("#monto").type(500);

    // Enviar el formulario de registro de gastos
    cy.get("#registrar-button").click();

    // Verificar que el monto registrado aparezca en el resultado
    cy.get("#resultado-div").should("contain", 500);
  });

  // Caso 2: Verificar los datos de los gastos registrados
  it("Muestra los datos de los gastos registrados", () => {
    // Realizar el login para autenticar al usuario
    cy.visit("/src/LogIn/login.html");

    // Llenar el formulario de inicio de sesión
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("ValidPassword123");

    // Enviar el formulario y verificar la redirección al Dashboard
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/Dashboard/dashboard.html");

    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Registro de Gastos").click();
    cy.url().should("include", "/src/Gasto/gastos.html");

    // Registrar el primer gasto
    cy.get("#fecha").type("2021-12-21");
    cy.get("#descripcion").type("Comida");
    cy.get("#monto").type(100);
    cy.get("#registrar-button").click();

    // Verificar que los datos del gasto registrado aparezcan en el resultado
    cy.get("#resultado-div")
      .should("contain", "2021-12-21")
      .and("contain", "Comida")
      .and("contain", 100);
  });
});
