describe('Test Login kasirAja', () => {
    it('should open login page first', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('success login using valid credential', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("davagaluh22@gmail.com")
      cy.get('#password').type("tokohariini")
      cy.contains("login").click()
  
      // should be redirected to dashboard page /dashboard
      cy.url().should('include', '/dashboard')
  
      // should contains text "kasirAja"
      cy.contains("kasirAja")
    })

    it('failed login using wrong password', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type("davagaluh22@gmail.com")
        cy.get('#password').type("tokobesok")
        cy.contains("login").click()
    
        // should be redirected to dashboard page /dashboard
        cy.url().should('include', '/login')
    
        // should contains text "kasirAja"
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','Kredensial yang Anda berikan salah')
      })
})