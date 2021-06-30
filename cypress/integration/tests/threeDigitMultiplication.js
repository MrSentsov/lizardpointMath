import multiplicationFunction from "./common/multiplicationFunction"
import multiplicationLoop from "./common/multiplicationLoop"

describe(
    "visits the website",
    () => {
        it(
            "Visits the website",
            () => {
                // Visits the website
                cy.visit("https://lizardpoint.com/")
            }
        )
        it(
            "Locates the multiplication section",
            () => {
                // Finds the navigation bar and iterates through its items to find 'Math'
                cy.get(".navbar-nav")
                    .find("a")
                    .each(($el) => {
                        if ($el.text() === "Math") {
                            cy.wrap($el)
                                .click()
                        }
                    })
                cy.get(":nth-child(1) > table > tbody > :nth-child(3) > :nth-child(2) > .M")
                    .click()
            }
        )
        it(
            "Chooses 20 level 4 questions",
            // Handles a radio button and a static dropdown
            () => {
                cy.get("input[type='radio']")
                    .get("input[value='4']")
                    .check()
                    .should("be.checked")
                cy.get("select[name='numqstn']")
                    .select("20")
                cy.get("input[type='image']")
                    .click()
            }
        )
        it(
            "Multiplies two 3 digit numbers",
            () => {
                // Runs a function and a 'loop' (true loops won't work in Cypress due to asynchronous nature)
                multiplicationFunction()
                multiplicationLoop()
            }
        )
    }
)
