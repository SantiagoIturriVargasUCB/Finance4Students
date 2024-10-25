describe("Registrar Ingresos", () => {
  it("Muestra el monto, fecha y descripción de un ingreso", () => {
    // Visita la página de login
    cy.visit("/src/LogIn/login.html");

    // Llenar el formulario de inicio de sesión
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("ValidPassword123");

    // Enviar el formulario y verificar la redirección al Dashboard
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/Dashboard/dashboard.html");

    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Registro de Ingresos").click();
    cy.url().should("include", "/src/Ingreso/ingresos.html");

    cy.get("#monto").type(100);
    cy.get("#fecha").type("2004-10-27");
    cy.get("#descripcion").type("Ingreso de prueba");
    cy.get("#registrar-button").click(); // Usamos el mismo ID que en Gastos

    // Verificar que el ingreso registrado se muestre correctamente
    cy.get("#ingreso-div")
      .should("contain", "100")
      .and("contain", "2004-10-27")
      .and("contain", "Ingreso de prueba");
  });

  it("Muestra los datos de múltiples ingresos registrados", () => {
    cy.visit("/src/Ingreso/ingresos.html");
    cy.get("#monto").type(150);
    cy.get("#fecha").type("2024-01-15");
    cy.get("#descripcion").type("Pago de salario");
    cy.get("#registrar-button").click(); // Usamos el mismo ID que en Gastos

    // Verificar que el ingreso registrado se muestre correctamente
    cy.get("#ingreso-div")
      .should("contain", "150")
      .and("contain", "2024-01-15")
      .and("contain", "Pago de salario");
  });
});
