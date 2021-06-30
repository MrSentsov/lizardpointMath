function getNumber1 () {
    return cy.get("#x4span").invoke("text")
}

function getNumber2 () {
    return cy.get("#y4span").invoke("text")
}

function multiply (num1, num2) {
    return num1 * num2
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
                cy.get("#x4span").then(($num1) => {
                    const num1 = $num1.text()

                    cy.get("#y4span").then(($num2) => {
                        const num2 = $num2.text()

                        const num3 = multiply(
                            num1,
                            num2
                        )

                        cy.get("#response").type(num3)
                    })
                })

                // Cy.get("#x4span").invoke("text")
                //     .as("num1")
                // Cy.get("#y4span").invoke("text")
                //     .as("num2")
                // Cy.get("@num1").then((subject) => {
                //     Subject
                //     Cy.get("#response").type(subject) // Logs 'foo'
                // })

                // Cy.get("#response").type(answer)
                // // When I am ready to type the answer
            }
        )
    }
)
