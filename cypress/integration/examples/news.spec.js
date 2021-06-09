/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=EAQClhAibPBE9lh954qOb9tYVaTw98ki`, {fixture: 'articles.json'})
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Should have a header', () => {
    cy
    .get('[data-cy=header]').should('exist')
    .should('contain', 'News Of THe World')
  })

})
