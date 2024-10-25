describe("Crear Objetivo", () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    cy.clearLocalStorage();
    // Iniciar sesión antes de visitar el Dashboard
    cy.visit("/src/LogIn/login.html");
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("ValidPassword123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/Dashboard/dashboard.html");
  });

  it("Debería mostrar el objetivo creado al usuario", () => {
    // Hacer clic en el enlace "Objetivos de Ahorro" en el Dashboard
    cy.contains("a", "Objetivos de Ahorro").should("exist").click();
    cy.url().should("include", "/src/ObjetivoAhorro/objetivos.html");

    // Llenar el formulario de creación de objetivo
    cy.get("#objName").type("Vacaciones");
    cy.get("#objMount").type(1500);
    cy.get("#objDate").type("2025-02-10");

    // Enviar el formulario
    cy.get("#obj-button").should("exist").click();

    // Verificar que el objetivo creado se muestre correctamente
    cy.get("#resultado-div")
      .should("contain", "Vacaciones")
      .and("contain", "1500")
      .and("contain", "2025-02-10");
  });
});
