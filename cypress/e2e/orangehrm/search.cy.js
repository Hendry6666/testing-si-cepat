describe('Search Menu Test',()=>{before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include','index.php')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('.oxd-button').click()
});
it('Search Menu Test for Directory',()=>{
    cy.get('.oxd-main-menu-search > .oxd-input').type('directory')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
});
;})