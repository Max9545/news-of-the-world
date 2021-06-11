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

  it('Should have articles for the user to choose from on a series of cards', () => {
    cy
    .get('[data-cy=card_title]').should('exist')
    .should('contain', 'Uber and Lyft Ramp Up Legislative Efforts to Shield Business Model')
    .get('[data-cy=card_photo]').should('exist')
    .should('have.attr', 'src', 'https://static01.nyt.com/images/2021/06/07/nyregion/00gig-worker01/00gig-worker01-articleInline.jpg')
    // .get('[data-cy=card_caption]').should('exist')
    // .should('contain', 'Driving for Uber in Manhattan. Gig companies like Uber and Lyft have long resisted classifying workers as employees.')
    .get('[data-cy=card_authors]').should('exist')
    .should('contain', 'By Noam Scheiber')
    .get('[data-cy=card_authors]').should('exist')
    .should('contain', 'By Noam Scheiber')
    .get('[data-cy=card_button]').should('exist')
    .should('contain', 'See Details')
    .get('[data-cy=card_date]').should('exist')
    .should('contain', 'Wed Jun 09 2021')
  })

  it('Should multiple cards', () => {
    cy
    .get('[data-cy=card_title]').should('exist')
    .should('contain', 'What to Know About the Newest iPhone and Android Software')
    .get('[data-cy=card_authors]').should('exist')
    .should('contain', 'By Brian X. Chen')
  })

  it('Should go to a details page on click of an article and show more informaion', () => {
    cy
    .get('[data-cy=card_button]').first()
    .click()
    .get('[data-cy=detail_title]').should('exist')
    .should('contain', 'Uber and Lyft Ramp Up Legislative Efforts to Shield Business Model')
    .get('[data-cy=detail_authors]').should('exist')
    .should('contain', 'By Noam Scheiber')
    .get('[data-cy=detail_abstract]').should('exist')
    .should('contain', 'Gig economy companies are backing state laws in New York and elsewhere that would cement drivers’ status as contractors in exchange for a union')
    .get('[data-cy=detail_photo]').should('exist')
    .should('have.attr', 'src', 'https://static01.nyt.com/images/2021/06/07/nyregion/00gig-worker01/00gig-worker01-superJumbo.jpg')
    .get('[data-cy=detail_caption]').should('exist')
    .should('contain', 'Driving for Uber in Manhattan. Gig companies like Uber and Lyft have long resisted classifying workers as employees.')
    .get('[data-cy=detail_topics-container]').should('exist')
    .should('contain', 'Wages and Salaries')
    .should('contain', 'Labor and Jobs')
    .should('contain', 'Organized Labor')
    .should('contain', 'Collective Bargaining')
    .should('contain', 'Freelancing, Self-Employment and Independent Contracting')
    .should('contain', 'Regulation and Deregulation of Industry')
    .should('contain', 'Car-Pooling and Ride-Sharing')
    .should('contain', 'Law and Legislation')
    cy
    .get('[data-cy=detail_link-to-NYT]').should('exist')
    .should('contain', 'Go To Full NYT Article')
    .should('have.attr', 'href', 'https://www.nytimes.com/2021/06/09/business/economy/uber-lyft-gig-workers-new-york.html')
    .get('[data-cy=detail_news-sections]').should('exist')
    .should('contain', 'Sections: Business')
    .get('[data-cy=detail_date]').should('exist')
    .should('contain', 'Wed Jun 09 2021')
    .get('[data-cy=detail_relevant-orgs]').should('exist')
    // .should('contain', 'Wed Jun 09 2021')
    .get('[data-cy=detail_relevant-people]').should('exist')
    // .should('contain', 'None At This Time')
  })
})
