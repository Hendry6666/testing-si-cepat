
describe('Login page',() => {
    it("Visit Login Page", () => {
        cy.visit("http://saucedemo.com");
        // cy.title().should("eq", "Swag Labs")
    });
    it('LOGIN', () => {
        cy.fixture("example").then(example=>{
            const username = example.username
            const password = example.password
            const firstname = example.firstname
            const lastname = example.lastname
            const portalcode = example.portalcode
            const hino = example.hino

            cy.get('#user-name').clear
            cy.get('#user-name').type(username)

            cy.get('#password').clear
            cy.get('#password').type(password)

            cy.get("input[name='login-button']").click()
            cy.get('span').should('contain.text','Products')
            
            cy.get('[data-test=product_sort_container]').select(hino);
            cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
            cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
            cy.get('.shopping_cart_badge').click()
            cy.get('[data-test=checkout]').click()
            cy.get('.title').should('contain','Checkout: Your Information')
            cy.get('.shopping_cart_badge').should('contain', '2')
            cy.get('[data-test=continue]').click()
            cy.get('[data-test=error]').should('contain', 'Error: First Name is required')
            cy.get('[data-test=firstName]').clear()
            cy.get('[data-test=firstName]').type(firstname)
            cy.get('[data-test=continue]').click()
            cy.get('[data-test=error]').should('contain', 'Error: Last Name is required')
            cy.get('[data-test=firstName]').clear()
            cy.get('[data-test=firstName]').type(firstname)
            cy.get('[data-test=lastName]').clear()
            cy.get('[data-test=lastName]').type(lastname)
            cy.get('[data-test=continue]').click()
            cy.get('[data-test=error]').should('contain', 'Error: Postal Code is required')
            cy.get('[data-test=firstName]').clear()
            cy.get('[data-test=firstName]').type(lastname)
            cy.get('[data-test=lastName]').clear()
            cy.get('[data-test=lastName]').type(lastname)
            cy.get('[data-test=postalCode]').clear()
            cy.get('[data-test=postalCode]').type(portalcode)
            cy.get('[data-test=continue]').click()
            cy.get('.title').should('contain', 'Checkout: Overview')
            
        })

    })
})