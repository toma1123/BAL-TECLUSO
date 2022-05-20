/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://sutom.nocle.fr')
    })

    it('close', () => {
        cy.get('[id=panel-fenetre-bouton-fermeture]').click()
    })

    it('type', () => {
        cy.get('[id=panel-fenetre-bouton-fermeture]').click()
        cy.get('body').type('R')
        cy.get('body').type('A')
        cy.get('body').type('C')
        cy.get('body').type('L')
        cy.get('body').type('E')
        cy.get('body').type('T')
        cy.get('body').type('T')
        cy.get('body').type('E')
        cy.get('body').type('{enter}')
    })
})
