// require register e menu
describe('Validar campos obrigatório', () => {

    beforeEach(() => {
        cy.visit('/index.php?route=account/register')

    })

    it('campo  obrigatótio', () => {
                // cy.get(pomenus.linkMinhaConta).click();
        // cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('[type="checkbox"]').click();
        cy.get('.pull-right > .btn').click();
        cy.contains(':nth-child(3) > .col-sm-10 > .text-danger', 'O nome deve ter entre 1 e 32 caracteres').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains(':nth-child(4) > .col-sm-10 > .text-danger', 'O sobrenome deve ter entre 1 e 32 caracteres.').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains('#custom-field3 > .col-sm-10 > .text-danger', 'O campo CPF / CNPJ é obrigatório.').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains(':nth-child(6) > .col-sm-10 > .text-danger', 'O e-mail não é válido.').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains('#custom-field4 > .col-sm-10 > .text-danger', 'O campo Data de Nascimento é obrigatório.').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains(':nth-child(9) > .col-sm-10 > .text-danger', 'O telefone deve ter entre 10 e 11 caracteres com DDD. Somente números, sem espaços ou traços.').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains(':nth-child(2) > .has-error > .col-sm-10 > .text-danger', 'A senha deve ter letras maiúsculas, minúsculas e números.').should('be.visible');
        cy.get('.pull-right > .btn').click();
        cy.contains(':nth-child(4) > .form-group > .col-sm-10 > .text-danger', 'O código no campo não é o mesmo da imagem!!').should('be.visible');

    })




})