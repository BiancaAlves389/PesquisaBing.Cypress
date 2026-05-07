describe('Pesquisa no Bing', () => {

  it('Fazer pesquisa', () => {

    cy.on('uncaught:exception', () => false);

    cy.visit('https://www.bing.com/?cc=br');

    cy.get('body').then(($body) => {
      if ($body.text().match(/aceitar|accept/i)) {
        cy.contains(/aceitar|accept/i).click({ force: true });
      }
    });

    cy.get('#sb_form_q')
      .type('Livros JAVA{enter}');

    cy.get('#b_results', { timeout: 10000 })
      .should('be.visible');

    cy.screenshot();
  });

});