describe('amazon task', () => {
  it('places an item in cart and asserts the item is in the cart', () => {
    cy.visit('https://www.amazon.co.uk')
    
    cy.get("[id='sp-cc-accept']").click()

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get("[id='twotabsearchtextbox']")
      .type('juggling balls')

    // click search button
    cy.get("[id='nav-search-submit-text']").click()   

    //click Item to buy
    cy.contains("Flames").click()
    
    //click add to cart
    
    cy.contains('Add to Basket').click()
    
    //go to baket
    
    cy.contains('Go to basket').click()

    // assert item is in basket
    cy.contains("1 item").should("be.visible")
  })
})