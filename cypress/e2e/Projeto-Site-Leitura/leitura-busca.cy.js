const { type } = require("os");

describe ('busca site Leitura',() => {

    before(() => {
        cy.visit('https://leitura.com.br/')
    })

    it('Validar menu cadastro', () => {
      cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
      cy.get('.dropdown-menu > :nth-child(1) > a').click();

    
 
    })


})