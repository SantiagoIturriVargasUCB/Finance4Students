describe("Crear Objetivo", () => {
    it("Debería mostrar el objetivo creado al usuario", () => {
      
          // Visita la página de login
    cy.visit("/src/LogIn/login.html");

    // Llenar el formulario de inicio de sesión
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("ValidPassword123");

    // Enviar el formulario y verificar la redirección al Dashboard
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/Dashboard/dashboard.html");

    // Hacer clic en el enlace "Registro de Gastos" en el Dashboard
    cy.contains("a", "Objetivos de Ahorro").click();
    cy.url().should("include", "/src/ObjetivoAhorro/objetivos.html");

  
      cy.get("#objName").type("Vacaciones");
      cy.get("#objMount").type(1500);
      cy.get("#objDate").type("2025-02-10");
      
      cy.get("#obj-button").click();
  
      cy.get("#resultado-div").should("contain", "Vacaciones").and("contain", "1500").and("contain","2025-02-10");
    });
  });