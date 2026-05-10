describe('Pesquisa no Bing', () => {

  it('Fazer pesquisa', () => {

    // Ignora erros inesperados da página
    cy.on('uncaught:exception', () => false);

    // Abre o Bing versão Brasil
    cy.visit('https://www.bing.com/?cc=br');

    // Espera o body carregar
    cy.get('body', { timeout: 10000 }).should('be.visible');

    // Verifica se existe botão de aceitar cookies
    cy.get('body').then(($body) => {

      // Procura botão com texto Aceitar ou Accept
      const botao = $body.find(
        'button:contains("Aceitar"), button:contains("Accept")'
      );

      // Se encontrar o botão, clica nele
      if (botao.length > 0) {
        cy.wrap(botao[0]).click({ force: true });
      }

    });

    // Digita na barra de pesquisa
    cy.get('#sb_form_q')
      .should('be.visible')
      .type('Livros JAVA{enter}');

    // Verifica se os resultados apareceram
    cy.get('#b_results', { timeout: 10000 })
      .should('be.visible');

    // Tira print da tela
    cy.screenshot();

  });

});