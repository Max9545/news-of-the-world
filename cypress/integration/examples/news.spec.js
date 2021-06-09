/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Should have a header', () => {
    cy
    .get('[data-cy=header]').should('exist')
    .should('contain', 'News Of THe World')
  })

})
