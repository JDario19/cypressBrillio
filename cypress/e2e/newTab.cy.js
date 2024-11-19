
describe('', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/')
    });

    it('Click in a link and intercept it', () => {
        cy.get('#menu-item-20 > a').click();
        cy.contains('Test Exceptions').click();
        cy.get('#food_list > :nth-child(2) > a').invoke('removeAttr','target').click();
        cy.get('#VnuFQ3').should('have.text', 'www.udemy.com needs to review the security of your connection before proceeding.')
        cy.go('back')
    });
});