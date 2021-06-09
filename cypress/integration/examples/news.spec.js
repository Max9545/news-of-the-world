/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=EAQClhAibPBE9lh954qOb9tYVaTw98ki`, {fixture: 'articles.json'})
    cy.visit('http://localhost:3000/')
  })



  it('Should have a header', () => {
    cy
    .get('[data-cy=header]').should('exist')
    .should('contain', 'News Of THe World')
  })

  it.only('Should have articles for the user to choose from on a series of cards', () => {
    cy
    .get('[data-cy=card_title]').should('exist')
    .should('contain', 'Uber and Lyft Ramp Up Legislative Efforts to Shield Business Model')
    .get('[data-cy=card_photo]').should('exist')
    .should('have.attr', 'src', 'https://static01.nyt.com/images/2021/06/07/nyregion/00gig-worker01/00gig-worker01-articleInline.jpg')
    .get('[data-cy=card_caption]').should('exist')
    .should('contain', 'Driving for Uber in Manhattan. Gig companies like Uber and Lyft have long resisted classifying workers as employees.')
    .get('[data-cy=card_authors]').should('exist')
    .should('contain', 'By Noam Scheiber')
    .get('[data-cy=card_authors]').should('exist')
    .should('contain', 'By Noam Scheiber')
    .get('[data-cy=card_button]').should('exist')
    .should('contain', 'See More')
    .get('[data-cy=card_date]').should('exist')
    .should('contain', 'Wed Jun 09 2021')
  })

})
