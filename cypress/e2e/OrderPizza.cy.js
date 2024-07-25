

describe("SANITY CHECK", ()=> {
  it("opens the app", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Technological Meals")
  })
});

describe("ORDERPIZZA", ()=> {

  beforeEach(() => {
    //arrange
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="orderPizza"]').as('OrderPizzaLink');
    //act
    cy.get("@OrderPizzaLink").click();
  })

  it("opens the 'OrderPizza' page", ()=> {
    //assert
    cy.url().should("include", "/OrderPizza");
  })

  it("starts with disabled submit button", ()=> {
    //assert
    cy.get('[data-cy="submit-orderPizza-form"]').should("be.disabled");
  });

  it("submits form", ()=> {
    //act
    cy.get('[data-cy="input-size"]').first().check();
    cy.get('[data-cy="input-dough"]').select('medium');
    cy.get('[data-cy="checkbox-1"]').check();
    cy.get('[data-cy="checkbox-2"]').check();
    cy.get('[data-cy="checkbox-3"]').check();
    cy.get('[data-cy="checkbox-4"]').check();
    cy.get('[data-cy="input-username"]').type("yildiz");
    cy.get('[data-cy="input-orderNote"]').type("siparis notum");
    cy.get('[data-cy="submit-orderPizza-form"]').click();
    //assert
    cy.url().should("include", "/success");
  });
})


describe("FAIL", ()=> {
  it("throws errors if min 4 max 10 additional ingrediets are not checked, min 3 characters username and orderNote are not written", ()=> {
    //arrange
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="orderPizza"]').as('OrderPizzaLink');
    //act
    cy.get("@OrderPizzaLink").click();
    cy.get('[data-cy="checkbox-1"]').check();
    cy.get('[data-cy="checkbox-1"]').uncheck();
    cy.get('[data-cy="checkbox-2"]').check();
    cy.get('[data-cy="checkbox-2"]').uncheck();
    cy.get('[data-cy="checkbox-3"]').check();
    cy.get('[data-cy="checkbox-3"]').uncheck();
    cy.get('[data-cy="checkbox-4"]').check();
    cy.get('[data-cy="checkbox-4"]').uncheck();
    cy.get('[data-cy="input-username"]').type("yi");
    cy.get('[data-cy="input-orderNote"]').type("y");
    //assert
    cy.contains("Please enter a name consisting of at least 3 characters.").should("be.visible");
    cy.contains("Please enter an order note.").should("be.visible");
    cy.contains("Please choose at least 4 and at most 10 options.").should("be.visible");
  });
})


