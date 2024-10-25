describe("Crear Objetivo", () => {
  // Antes de cada prueba, realizar la limpieza del localStorage e iniciar sesión
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba para garantizar un estado limpio
    cy.clearLocalStorage();

    // Visitar la página de inicio de sesión y realizar el login
    cy.visit("/src/LogIn/login.html");
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("ValidPassword123");
    cy.get('button[type="submit"]').click();

    // Verificar que se haya redirigido al Dashboard correctamente
    cy.url().should("include", "/Dashboard/dashboard.html");
  });

  it("Debería mostrar el objetivo creado al usuario", () => {
    // Hacer clic en el enlace "Objetivos de Ahorro" en el Dashboard
    cy.contains("a", "Objetivos de Ahorro").should("exist").click();

    // Verificar que la URL redirija correctamente a la página de objetivos
    cy.url().should("include", "/src/ObjetivoAhorro/objetivos.html");

    // Llenar el formulario de creación de objetivo con los datos de prueba
    cy.get("#objName").should("exist").type("Vacaciones");
    cy.get("#objMount").should("exist").type(1500);
    cy.get("#objDate").should("exist").type("2025-02-10");

    // Verificar que el botón de crear objetivo esté presente y hacer clic en él
    cy.get("#obj-button").should("exist").click();

    // Verificar que el objetivo creado se muestre correctamente en el resultado
    cy.get("#resultado-div")
      .should("contain", "Vacaciones")
      .and("contain", 1500)
      .and("contain", "2025-02-10");
  });
});
