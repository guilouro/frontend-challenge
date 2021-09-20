/// <reference path="../support/index.d.ts" />

import { createUser } from "../support/generate";

describe('Store', () => {
  it('should finalizing a purchase', () => {
    // visitar a página
    const user = createUser()

    cy.visit('/')

    cy.findByText('Store').should('exist')
    cy.findByText('Explore our vast selection of premium products').should('exist')

    cy.addToCartByIndex(1)
    cy.addToCartByIndex(2)
    cy.addToCartByIndex(3)

    cy.findByText('3 items').should('exist')

    cy.findByRole('button', { name: /your cart/i }).click()

    cy.findByRole('button', { name: /remove barkyn zen treats/i }).click()

    cy.findByText('2 items').should('exist')

    cy.getByDataCy("cart-item").eq(0).within(() => {
      cy.get('select').select('3')
    })

    cy.findByRole('link', { name: /go to checkout/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/checkout`)

    cy.findByRole('textbox', { name: /your name/i }).type(user.name)
    cy.findByRole('textbox', { name: /email/i }).type(user.email)
    cy.findByRole('textbox', { name: /shipping address/i }).type(user.address)
    cy.findByRole('textbox', { name: /postal code/i }).type(user.postalcode)
    cy.findByRole('textbox', { name: /country/i }).type(user.country)
    cy.findByRole('textbox', { name: /phone number/i }).type(user.phone)
    cy.findByRole('textbox', { name: /card number/i }).type(user.cardnumber)
    cy.findByRole('textbox', { name: /card holder/i }).type(user.cardholder)
    cy.findByRole('textbox', { name: /expiry date/i }).type(user.expirydate)
    cy.findByRole('textbox', { name: /security code/i }).type(user.code)

    cy.findByRole('button', { name: /complete order/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

    cy.findByText('3x 4M. Super-comida Sénior Mini Peru e Frango').should('exist')
    cy.findByText('1x Super-comida Adulto Mini Salmão').should('exist')
    cy.findByText(user.address).should('exist')
    cy.findByText(user.country).should('exist')

    cy.findByRole('button', { name: /return to website/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  });
});
