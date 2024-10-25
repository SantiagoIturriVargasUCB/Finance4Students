describe("Historial Ingresos", () => {
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

  it("Muestra varios ingresos registrados correctamente", () => {
    // Hacer clic en el enlace "Registro de Ingresos" en el Dashboard
    cy.contains("a", "Registro de Ingresos").should("exist").click();
    cy.url().should("include", "/src/Ingreso/ingresos.html");

    // Registrar primer ingreso
    cy.get("#monto").should("exist").type(1000);
    cy.get("#fecha").should("exist").type("2023-12-20");
    cy.get("#descripcion").should("exist").type("Venta de productos");
    cy.get("#registrar-button").should("exist").click();

    // Registrar segundo ingreso
    cy.get("#monto").should("exist").type(200);
    cy.get("#fecha").should("exist").type("2024-01-10");
    cy.get("#descripcion").should("exist").type("Servicios");
    cy.get("#registrar-button").should("exist").click();

    // Registrar tercer ingreso
    cy.get("#monto").should("exist").type(150);
    cy.get("#fecha").should("exist").type("2024-02-15");
    cy.get("#descripcion").should("exist").type("Consultoría");
    cy.get("#registrar-button").should("exist").click();

    // Mostrar el historial de ingresos
    cy.get("#ver-historial").should("exist").click();

    // Verificar que el historial de ingresos se muestra correctamente
    cy.get("#historial-lista")
      .should("contain", "Venta de productos")
      .and("contain", 1000)
      .and("contain", "2023-12-20")
      .and("contain", "Servicios")
      .and("contain", 200)
      .and("contain", "2024-01-10")
      .and("contain", "Consultoría")
      .and("contain", 150)
      .and("contain", "2024-02-15");
  });
});
