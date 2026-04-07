Cypress.Commands.add('adicionarProdutoCarrinho', (index) => {
  cy.visit('/produtos/')
  cy.get('.product-block').eq(index).click()

  cy.get('form.variations_form').then(($form) => {
    if ($form.length) {
      cy.wrap($form)
        .find('.variations select')
        .each(($select) => {
          cy.wrap($select)
            .find('option:not([value=""])')
            .first()
            .then(($option) => {
              cy.wrap($select).select($option.val(), { force: true })
            })
        })
    }
  })

  cy.get('.single_add_to_cart_button')
    .click({ force: true })

  cy.wait(1000)
})