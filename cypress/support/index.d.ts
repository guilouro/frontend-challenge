// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command to add product to cart by index
     * @example cy.addToCartByIndex(1)
     */
     addToCartByIndex(value: number): Chainable<Element>
  }
}
