describe('Pesquisa no Bing', () => {

  it('Fazer pesquisa', () => {

    // Ignora erros inesperados da página
    cy.on('uncaught:exception', () => false);

    // Abre o Bing
    cy.visit('https://www.bing.com');

    // Espera a página carregar
    cy.get('body', { timeout: 15000 }).should('be.visible');

    // Verifica se existe popup de cookies
    cy.get('body').then(($body) => {

      const botao = $body.find(
        'button:contains("Aceitar"), button:contains("Accept")'
      );

      // Se encontrar o botão, clica
      if (botao.length > 0) {
        cy.wrap(botao[0]).click({ force: true });
      }

    });

    // Espera o campo de pesquisa aparecer
    cy.get('input[name="q"]', { timeout: 15000 })
      .should('be.visible')
      .type('Livros JAVA{enter}');

    // Espera a URL mudar após a pesquisa
    cy.url({ timeout: 15000 })
      .should('include', 'search');

    // Verifica se apareceu algum resultado na página
    cy.get('body')
      .should('contain.text', 'JAVA');

    // Screenshot final
    cy.screenshot();

  });

});