/// <reference types="cypress" />

const faker = require('faker')
const email = faker.internet.email()
const password = faker.internet.password(5)
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const company = faker.company.companyName()
const address1 = faker.address.streetAddress()
const address2 = faker.address.secondaryAddress()
const city = faker.address.city()
const postcode = faker.address.zipCode("#####")
const other = faker.random.words(10)
const phone = faker.phone.phoneNumber('(##) ####-####')
const phone_mobile = faker.phone.phoneNumber('(##) #####-####')
const addressAlias = faker.address.streetName()

context('Cadastro de novo usuario', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('/')
        
        // elementos da home
        cy.get('div .login').click()

        // elementos da página de login
        cy.get('input#email_create').type(email)
        cy.get('button#SubmitCreate').click()

        // elementos da página de cadastro
        cy.get('input#id_gender2').check()
        cy.get('input#customer_firstname').type(firstName)
        cy.get('input#customer_lastname').type(lastName)
        cy.get('input#passwd').type(password)
        cy.get('select#days').select('25')
        cy.get('select#months').select('9')
        cy.get('select#years').select('1983')
        cy.get('input#optin').check()
        //cy.get('input#firstname').type(firstName)
        //cy.get('input#lastname').type(lastName)
        cy.get('input#company').type(company)
        cy.get('input#address1').type(address1)
        cy.get('input#address2').type(address2)
        cy.get('input#city').type(city)
        //cy.get('select#id_country').select('21')
        cy.get('select#id_state').select('2')
        cy.get('input#postcode').type(postcode)        
        cy.get('textarea#other').type(other)
        cy.get('input#phone').type(phone)
        cy.get('input#phone_mobile').type(phone_mobile)
        cy.get('input#alias').type(addressAlias)
        cy.get('button#submitAccount').click()

        //Assertions
        cy.url().should('contain','my-account')
    });
});