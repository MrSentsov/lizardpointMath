
describe(
    "visits the website",
    ()=>{
        it(
            "visits the website",
            ()=>{
                cy.visit('https://lizardpoint.com/')
                cy.get('.navbar-nav')
                .find('a').each(($el, index, $list) =>{
                    if($el.text() === 'Math')
                    {
                    cy.wrap($el).click()
                    }
                })
                cy.get(':nth-child(1) > table > tbody > :nth-child(3) > :nth-child(2) > .M').click()
                
            }

        )
    }
)