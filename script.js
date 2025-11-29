//your JS code here. If required.
() => { 
    const price_background = 'rgb(46, 204, 113)'; 
    const color_author = 'rgb(119, 119, 119)'; 
    const color_white = 'rgb(255, 255, 255)'; 
    
    cy.get('.book').within(() => { 
        // FIX 1: Target the specific '.price' span for the background check
        cy.get('.price') 
          .should('have.css', 'background-color', price_background)
          // Note: you don't have border-radius in your CSS, this check will likely fail next
          .should('have.css', 'border-radius'); 
          
        // FIX 2: Check the text color of the price span
        cy.get('.price').should('have.css', 'color', color_white); 

        // The paragraph itself doesn't have the author color, the span inside it does
        cy.get('.author').should('have.css', 'color', color_white); 
    }); 
}
