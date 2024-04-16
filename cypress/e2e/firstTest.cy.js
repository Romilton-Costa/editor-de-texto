describe('Teste do editor', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');

      const texto = 'Este é um texto de teste.';
      cy.get('#editor').type(texto).should('have.value', texto);

      const fonte = 'Arial';
    cy.get('.editor-container select')
      .eq(0)
      .select(fonte)
      .should('have.value', fonte);

      const corFonte = 'black';
      cy.get('.editor-container select')
        .eq(2)
        .select(corFonte)
        .should('have.value', corFonte);


  
  });


})

//
  //    cy.get('.editor-container .toolbar button').contains('BiAlignRight')
    //  .click();

     // cy.get('#editor').should('have.css', 'text-align', 'right');

      //cy.get('.editor-container button')
     // .contains('FaAlignCenter')
     // .click();

   //   cy.get('#editor')
   //   .should('have.css', 'text-align', 'center');

   //   cy.get('.editor-container button')
   //  .contains('BiAlignLeft')
   //   .click();

    //  cy.get('#editor')
    //  .should('have.css', 'text-align', 'left');