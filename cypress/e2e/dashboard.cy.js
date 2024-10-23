describe('Dashboard Functionality', () => {
  beforeEach(() => {
    cy.visit('/src/dashboard/dashboard.html');  // Asegúrate de que la ruta sea correcta
  });

  // Caso 1: Verificar que el dashboard muestra el mensaje de bienvenida correcto
  it('should display the correct welcome message', () => {
    cy.get('h1').should('contain', 'Welcome, validuser@example.com!');
  });

  // Caso 2: Verificar que el botón de logout existe
  it('should have a logout button', () => {
    cy.get('#logoutBtn').should('exist');
  });

  // Caso 3: Simular el clic en logout y redirigir a la página de login
  it('should redirect to login after clicking logout', () => {
    cy.get('#logoutBtn').click();
    cy.url().should('include', '/LogIn/login.html');
  });
});
