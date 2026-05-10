describe('Pesquisa no DuckDuckGo', () => {

  it('Fazer pesquisa', () => {

    // Ignora erros da página
    cy.on('uncaught:exception', () => false);

    // Abre o site
    cy.visit('https://duckduckgo.com/');

    // Espera o campo de pesquisa carregar
    cy.get('input[name="q"]', { timeout: 15000 })
      .should('be.visible')
      .type('Livros JAVA{enter}');

    // Verifica se a URL mudou após a pesquisa
    cy.url({ timeout: 15000 })
      .should('include', 'q=Livros+JAVA');

    // Verifica se existe resultado na página
    cy.get('body')
      .should('contain.text', 'JAVA');

    // Tira print
    cy.screenshot();

  });

});