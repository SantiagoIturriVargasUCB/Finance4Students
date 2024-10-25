describe("Registrar Ingresos", () => {
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
  
  it("Muestra el monto, fecha y descripción de un ingreso", () => {
    // Hacer clic en el enlace "Registro de Ingresos" en el Dashboard
    cy.contains("a", "Registro de Ingresos").should("exist").click();
    cy.url().should("include", "/src/Ingreso/ingresos.html");

    // Verificar la existencia de los campos antes de interactuar
    cy.get("#monto").should("exist").type(100);
    cy.get("#fecha").should("exist").type("2004-10-27");
    cy.get("#descripcion").should("exist").type("Ingreso de prueba");

    // Verificar la existencia del botón antes de hacer clic
    cy.get("#registrar-button").should("exist").click();

    // Verificar que el ingreso registrado se muestre correctamente
    cy.get("#ingreso-div")
      .should("contain", "100")
      .and("contain", "2004-10-27")
      .and("contain", "Ingreso de prueba");
  });

  it("Muestra los datos de múltiples ingresos registrados", () => {
    // Hacer clic en el enlace "Registro de Ingresos" en el Dashboard
    cy.contains("a", "Registro de Ingresos").should("exist").click();
    cy.url().should("include", "/src/Ingreso/ingresos.html");

    // Registrar el primer ingreso
    cy.get("#monto").should("exist").type(150);
    cy.get("#fecha").should("exist").type("2024-01-15");
    cy.get("#descripcion").should("exist").type("Pago de salario");
    cy.get("#registrar-button").should("exist").click();

    // Verificar que los datos del ingreso registrado se muestren correctamente
    cy.get("#ingreso-div")
      .should("contain", "150")
      .and("contain", "2024-01-15")
      .and("contain", "Pago de salario");
  });
});
