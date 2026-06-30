The easiest concept for me to understand was the basic test structure using describe() and it(). 
It felt very natural, like organizing files into folders. You group related tests together and give each one a clear name. 
The beforeEach() hook also made sense right away because it's just like setting up your workspace before starting a new task every day. 
Simple commands like cy.get() and .type() were easy too because they copy exactly what a real user does: find something on the page and interact with it.

The most challenging part was understanding waiting and timing. 
At first, I kept wanting to use cy.wait(5000) everywhere because that's what I would do if I were testing manually, just wait a few seconds and look at the screen.
But learning about Cypress's automatic waiting and cy.intercept() with aliases was a big breakthrough for me. 
It took some practice to see why hardcoded waits are bad, but once I experienced tests randomly failing because of timing issues, it finally clicked. 
File upload was also tricky at first because Cypress can't open the real browser file picker, so I had to learn the selectFile() command instead.

For what I want to learn next, I'm really interested in the Page Object Model so I can organize all my selectors in one place instead of repeating them in every test. 
I'd also like to try Cypress Component Testing for testing React pieces by themselves, and eventually set up CI/CD so my tests run automatically on GitHub whenever I push new code. 
That feels like the next real-world step that would actually matter in a job.
