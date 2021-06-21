
describe(
    "visits the website",
    ()=>{
        it(
            "visits the website",
            ()=>{
                cy.visit('https://lizardpoint.com/')
                cy.get('.navbar-nav')
                .find('li').each(($el, index, $list) =>{
                    const subjectName=$el.text()
                    if(subjectName.includes('Math'))
                    {
                     cy.get(subjectName)
                    }
                })

            }

        )
    }
)