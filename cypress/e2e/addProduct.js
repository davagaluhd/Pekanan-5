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

    it('Add Product', () => {
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').type("New Product")
        cy.get('#deskripsi').type("Product baru")
        cy.get('[id="harga beli"]').type("10000")
        cy.get('[id="harga jual"]').type("13000")
        cy.get('#stok').type("50")
        cy.get('#kategori').click()
        cy.wait(2000)
        cy.get('.css-u3dlpe').click()
        cy.wait(2000)
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
  
    
        cy.url().should('include', '/products')
    
        cy.contains("success")
        cy.contains("item ditambahkan")
      })
})
