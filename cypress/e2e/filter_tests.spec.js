/// <reference types="Cypress" />

// Tests that check working of filters
describe("filter tests", function() {
    before(function() {
        // Visit baseUrl from cypress.json
        cy.visit("")
        // Move 1 crew member to Interviewing column in order to have at least 1 person in each column
        cy.get(".CrewMember-up:first").click()
    })

    const nameInput = "#name"
    const cityInput = "#city"
    const crewMemberInfo = ".CrewMemeber-name"
    const submitButton = "[type=submit]"
    const appColumn = ".App-column"
    const firstAppColumn = `${appColumn}:first`
    const secondAppColumn = `${appColumn}:eq(1)`
    const thirdAppColumn = `${appColumn}:last`

    // Code that clears filters and input fields and will be run after each test
    afterEach(function() {
        cy.get("[type=button]").contains("Clear").click()
        cy.get(nameInput).clear()
        cy.get(cityInput).clear()
    })

    // We have 3 valid types of values that can be used as filters. 
    // They are: first name, last name and city.
    // We also have 3 columns. Each of them should be tested with filters.
    // I've made 3 positive tests on 3 columns with different combinations of valid filter values.
    it("filter Applied column by first name and city", function() {
        cy.get(nameInput).type("emma").should("have.value", "emma")
        cy.get(cityInput).type("worcester").should("have.value", "worcester")
        cy.get(submitButton).contains("Submit").click()
        cy.get(`${firstAppColumn} ${crewMemberInfo}`).should("contain", "emma").and("contain", "worcester")
    })

    it("filter Interviewing column by last name", function() {
        cy.get(nameInput).type("gonzalez").should("have.value", "gonzalez")
        cy.get(submitButton).contains("Submit").click()
        cy.get(`${secondAppColumn} ${crewMemberInfo}`).should("contain", "gonzalez")
    })

    it("filter Hired column by last name and city", function() {
        cy.get(nameInput).type("cunningham").should("have.value", "cunningham")
        cy.get(cityInput).type("sheffield").should("have.value", "sheffield")
        cy.get(submitButton).contains("Submit").click()
        cy.get(`${thirdAppColumn} ${crewMemberInfo}`).should("contain", "cunningham").and("contain", "sheffield")
    })

    // I've also made 1 negative test that checks filters behaviour with invalid data.
    it("filter by values that don't exist", function() {
        cy.get(nameInput).type("yevheniia").should("have.value", "yevheniia")
        cy.get(cityInput).type("kyiv").should("have.value", "kyiv")
        cy.get(submitButton).contains("Submit").click()
        cy.get(crewMemberInfo).should("not.exist")
    })
})