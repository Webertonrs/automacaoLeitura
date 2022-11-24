const menu = require('../../page-objects/menu.po.js')

describe('Funcionalidade: Menu', () => {

  before(() => {
    cy.visit('')
  })

  it('Acessando Menu', () => {
    cy.contains('a','Minha conta').click();
    cy.contains('a','Cadastre-se').click();
  
  })


})


