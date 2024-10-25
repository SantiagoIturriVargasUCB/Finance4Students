describe('Login Functionality - Finance4Students', () => {  
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    cy.clearLocalStorage();
    // Visitar la página de inicio de sesión
    cy.visit('/src/LogIn/login.html');
  });

  // Caso 1: Log in exitoso con credenciales válidas
  it('should log in successfully with valid credentials', () => {
    cy.get('input[name="email"]').should("exist").type('validuser@example.com');
    cy.get('input[name="password"]').should("exist").type('ValidPassword123');
    cy.get('button[type="submit"]').should("exist").click();

    cy.url().should('include', '/Dashboard/dashboard.html');
  });

  // Caso 2: Mostrar mensaje de error con credenciales inválidas
  it('should show error message with invalid credentials', () => {
    cy.get('input[name="email"]').should("exist").type('invaliduser@example.com');
    cy.get('input[name="password"]').should("exist").type('WrongPassword');
    cy.get('button[type="submit"]').should("exist").click();

    cy.get('#errorMessage').should('contain', 'Invalid email or password');
  });

  // Caso 3: Simular envío con campos vacíos (deshabilitando validación HTML)
  it('should show error message when fields are empty', () => {
    // Deshabilitar la validación del navegador
    cy.get('input[name="email"]').invoke('removeAttr', 'required');
    cy.get('input[name="password"]').invoke('removeAttr', 'required');

    // Intentar enviar el formulario vacío
    cy.get('button[type="submit"]').should("exist").click();

    // Verificar que se muestre el mensaje de error
    cy.get('#errorMessage').should('contain', 'Invalid email or password');
  });
});
