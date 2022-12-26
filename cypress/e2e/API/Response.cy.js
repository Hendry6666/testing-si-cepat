describe ('TEST API',()=>{
    it("Response Body", () => {
        cy.request({
            method : 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).as('posts')
        cy.get('@posts').its('status').should('equal',200)
    });

    it('Match Response', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',{id:'101', title:'ini post', userId:'not null'}).then((response)=>{
            cy.log(response.body)
            cy.expect(response.body.id).to.eq(101)
            cy.expect(response.body.title).to.eq('ini post')
            cy.expect(response.userId)
        })
    });
})