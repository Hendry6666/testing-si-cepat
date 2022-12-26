describe('Test Case 1 : Login Orange HRM', () => {
    it.only('Login and Logout Account', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'index.php')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-name').click()
        cy.get('a[href="/web/index.php/auth/logout"]').click()
    })
    
})