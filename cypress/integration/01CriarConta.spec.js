/// <reference types="cypress"/>
let Chance = require('chance');
let chance = new Chance();

context('CriarConta', () => {
    it('Criar uma conta', () => {
        cy.visit('index.php?controller=authentication&back=my-account');

        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();

        cy.get('input#id_gender2').check();

        cy.get('input#customer_firstname').type('Alex');
        cy.get('input#customer_lastname').type('Alves');
        cy.get('input#passwd').type('teste02');

        cy.get('select#days').select('15');
        cy.get('select#months').select('March');
        cy.get('select#years').select('2000');

        cy.get('input#newsletter').click();
        cy.get('input#optin').click();

        cy.get('input#firstname').type('Alex');
        cy.get('input#lastname').type('Alves');
        cy.get('input#company').type('SpreadTecnologia');
        cy.get('input#address1').type('QHSN 02 Quadra 5');
        cy.get('input#address2').type('QHSN 02 Quadra 6');
        cy.get('input#city').type('Brasilia');

        cy.get('select#id_state').select('Alabama');
        
        cy.get('input#postcode').type('12345');

        cy.get('select#id_country').select('United States');
        cy.get('select#id_state').select("Alabama");

        cy.get('#other').type('Criação de usuário para curso de Cypress');
        cy.get('input#phone').type('6198271625');
        cy.get('input#phone_mobile').type('2162751628');
        cy.get('input#alias').type('teste@mail.com');

        cy.get('button#submitAccount').click(); 

        cy.url().should('contain', 'index.php?controller=my-account' );

        cy.get('div[class=row] p[class=info-account]').should('contain.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');
    
    });
});