/// <reference types="Cypress" />

// Tests that check moving of items between columns.
// I've used not all existing items in my tests because 
// I've applied equivalence partitioning test design technique 
// and considered all items within each column as separete equivalence class. 
// That's why I've used only 1-2 item in each column.
describe("colums tests", function() {
    before(function() {
        cy.visit("http://localhost:3000/")
    })

    const appColumn = ".App-column"
    const firstAppColumn = `${appColumn}:first`
    const secondAppColumn = `${appColumn}:eq(1)`
    const thirdAppColumn = `${appColumn}:last`
    const crewMember = ".CrewMember-up"
    const firstCrewMember = `${crewMember}:first`
    const lastCrewMember = `${crewMember}:last`
    const crewMemberToolbar = ".CrewMember-toolbar"
    const arrowButton = "button[type=button]"
    const firstArrowButton = `${arrowButton}:first`
    const lastArrowButton = `${arrowButton}:last`

    it("move the first item from the Applied column to the Interviewing column", function() {
        cy.get(`${firstAppColumn} ${firstCrewMember}`).click()
    })

    it("move item back from the Interviewing column to the Applied column", function() {
        cy.get(`${secondAppColumn} ${crewMemberToolbar} ${firstArrowButton}`).click()
    })
    
    it("move the last item from the Applied column to the Interviewing column", function() {
        cy.get(lastCrewMember).click()
    })

    it("move item from the Interviewing column to the Hired column", function() {
        cy.get(`${secondAppColumn} ${firstCrewMember}`).click()
    })

    it("move item back from the Hired column to the Interviewing column", function() {
        cy.get(`${thirdAppColumn} ${crewMemberToolbar} ${lastArrowButton}`).click()
    })
})