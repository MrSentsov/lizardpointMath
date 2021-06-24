function getNumber1 () {
    cy.get("#x4span").invoke("text")
}

function getNumber2 () {
    cy.get("#y4span").invoke("text")
}

describe(
    "visits the website",
    () => {
        it(
            "visits the website",
            () => {
                // Visits the website, finds the navigation bar, and iterates trough its items to find Math
                cy.visit("https://lizardpoint.com/")
                cy.get(".navbar-nav")
                    .find("a")
                    .each(($el, index, $list) => {
                        if ($el.text() === "Math") {
                            cy.wrap($el)
                                .click()
                        }
                    })
                cy.get(":nth-child(1) > table > tbody > :nth-child(3) > :nth-child(2) > .M")
                    .click()
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
            "Multiplies the two numbers",
            () => {
                const num1 = getNumber1()

                const num2 = getNumber2()

                cy.log(num1)

                // cy.get("#response").type() 
                // When I am ready to type the answer
            }
        )
    }
)
