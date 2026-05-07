describe('Pesquisa no Bing', () => {

    it('Fazer pesquisa', () => {

        cy.on('uncaught:exception', () => false);

        cy.visit('https://www.bing.com/?cc=br');

        // aceita cookies se aparecer
        cy.contains(/aceitar/i).click({ force: true });

        cy.get('#sb_form_q')
          .type('Livros JAVA');

        // clicar no botão de busca (mais confiável que ENTER)
        cy.get('#sb_form_go').click({ force: true });

        // agora sim espera resultados
        cy.get('#b_results', { timeout: 10000 })
          .should('be.visible');

        cy.screenshot();

    });

});