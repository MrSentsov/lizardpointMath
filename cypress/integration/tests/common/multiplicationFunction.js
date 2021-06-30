
function multiply (one, two) {
    return one * two
}
const number1 = "#x4span"
const number2 = "#y4span"

export default function multiplicationFunction () {
    cy.get(number1).then(($num1) => {
        // Gets the value of the first number
        const num1 = $num1.text()

        cy.get(number2).then(($num2) => {
            // Gets the value of the second number
            const num2 = $num2.text()

            // Multiplies the two numbers
            const answer = multiply(
                num1,
                num2
            )

            // Enters the answer into the answer field and asserts it is correct
            cy.get("input#response").type(answer)
            cy.get("input#checkanswer").click()
            cy.get("span#result").should(
                "include.text",
                "Correct!"
            )
        })
    })
}
