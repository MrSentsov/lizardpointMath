const firstNumber = "cy.get('span#x4span').text()"
const secondNumber = "cy.get('span#y4span').text()"
const answer = "span#x4span * span#y4span"

describe(
    "visits the website",
    () => {
        it(
            "visits the website",
            () => {
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
                cy.get("input[type=\"radio\"]")
                    .get("input[value=\"4\"]")
                    .check()
                    .should("be.checked")
                cy.get("select[name=\"numqstn\"]")
                    .select("20")
                cy.get("input[type=\"image\"]")
                    .click()
            }

        )
        it(
            "Multiplies the two numbers",
            () => {
                cy.get("input#response").type(answer)
            }
        )
    }
)
