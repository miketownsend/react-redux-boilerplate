describe('End to Tests', function () {
  it('/ should display list of shows', function () {
    cy.visit('http://localhost:3001/')
    cy.get('.shows-list__list li').should('have.length.gt', 1)
  })

  it('/ should navigate to /shows on thumbnail click', function () {
    cy.visit('http://localhost:3001/')
    cy.get('.show-thumbnail:first').click()

    cy.url().should('include', '/shows/')
  })

  it('/ should display single show', function () {
    cy.visit('http://localhost:3001/shows/3377')
    cy.contains('Breakfast').should('be.visible')
    cy.get('.show-cast-list li').should('have.length.gt', 1)
  })
})
