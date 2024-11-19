const { messages } = require("../support/locatorsLogin.js");
const { fields } = require("../support/locatorsLogin.js");
const { urls } = require("../support/urls.js");
const { usersHomePage } = require("../support/users.js");
const {confirmationsMessages} = require ("../support/messages.js")

describe('test login', () => {
    beforeEach(() => {
        cy.visit(urls.loginPage);
    });

    it('Login success', () => {
        cy.get(messages.headerText).should('contain', 'Test login');
        cy.get(fields.loginTextBox).type(usersHomePage.username);
        cy.get(fields.passwordTextBox).type(usersHomePage.password);
        cy.get(fields.clickLogin).click();
        cy.contains(messages.successLogin).should('be.visible');
        cy.contains(messages.successLogin).should('have.text', confirmationsMessages.succesLoginMess)
    });

    it('Login using a user fail', () => {
        cy.get(messages.headerText).should('contain', 'Test login');
        cy.get(fields.loginTextBox).type('student1');
        cy.get(fields.passwordTextBox).type('Password123');
        cy.get(fields.clickLogin).click();
        cy.contains(messages.errorUserMessageLogin).should('be.visible');
        cy.contains(messages.errorUserMessageLogin).should('have.text', confirmationsMessages.userFail)
    });
    it('Login using a pass fail', () => {
        cy.get(messages.headerText).should('contain', 'Test login');
        cy.get(fields.loginTextBox).type('student');
        cy.get(fields.passwordTextBox).type('Password1223');
        cy.get(fields.clickLogin).click();
        cy.contains(messages.errorPassMessageLogin).should('be.visible');
        cy.contains(messages.errorPassMessageLogin).should('have.text', confirmationsMessages.passFail)
    });
});