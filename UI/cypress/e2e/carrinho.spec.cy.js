describe('US-0001 - Adicionar item ao carrinho', () => {

  it('Deve adicionar 3 produtos diferentes com sucesso', () => {
    cy.adicionarProdutoCarrinho(1)
    cy.adicionarProdutoCarrinho(3)
    cy.adicionarProdutoCarrinho(5)

    cy.visit('/carrinho/')

    cy.get('.cart_item')
      .should('have.length', 3)
  })
})