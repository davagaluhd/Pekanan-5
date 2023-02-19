describe('Test Login kasirAja', () => {
    it('Open Login Page', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('Success login using valid data', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("davagaluh22@gmail.com")
      cy.get('#password').type("tokohariini")
      cy.contains("login").click()

      cy.url().should('include', '/dashboard')
  
      cy.contains("kasirAja")
    })

    it('Failed login using wrong password', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type("davagaluh22@gmail.com")
        cy.get('#password').type("tokobesok")
        cy.contains("login").click()
    
        cy.url().should('include', '/login')
    
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','Kredensial yang Anda berikan salah')
      })
})